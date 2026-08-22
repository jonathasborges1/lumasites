import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, "..");
const imageDirectory = path.join(
  projectRoot,
  "public",
  "images",
  "escritorioalmeidaadv",
);

const portraitPath = path.join(
  imageDirectory,
  "patricia-almeida-socia-editorial-v2.webp",
);
const logoPath = path.join(imageDirectory, "almeida-logo-original.png");
const outputPath = path.join(imageDirectory, "almeida-advocacia-og-v3.jpg");

const overlay = Buffer.from(`
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="portraitBlend" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#1c1716" stop-opacity="1" />
        <stop offset="0.5" stop-color="#1c1716" stop-opacity="0.78" />
        <stop offset="1" stop-color="#1c1716" stop-opacity="0" />
      </linearGradient>
      <linearGradient id="bottomShade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0.55" stop-color="#100d0c" stop-opacity="0" />
        <stop offset="1" stop-color="#100d0c" stop-opacity="0.34" />
      </linearGradient>
    </defs>

    <rect x="565" y="0" width="310" height="630" fill="url(#portraitBlend)" />
    <rect width="1200" height="630" fill="url(#bottomShade)" />

    <g opacity="0.16" stroke="#b66f50">
      <line x1="64" y1="0" x2="64" y2="630" />
      <line x1="316" y1="0" x2="316" y2="630" />
      <line x1="568" y1="0" x2="568" y2="630" />
    </g>

    <text x="64" y="190" fill="#d89a7f" font-family="Arial, sans-serif" font-size="15" font-weight="700" letter-spacing="3.1">
      TRABALHISTA E PREVIDENCIÁRIO · SÃO MIGUEL PAULISTA, SP
    </text>

    <text x="64" y="272" fill="#fffaf6" font-family="Georgia, serif" font-size="60" font-weight="400" letter-spacing="-1.6">
      Seu trabalho afetou
    </text>
    <text x="64" y="342" fill="#fffaf6" font-family="Georgia, serif" font-size="60" font-weight="400" letter-spacing="-1.6">
      a sua saúde?
    </text>

    <rect x="64" y="394" width="56" height="3" fill="#b66f50" />
    <text x="64" y="444" fill="#e8ccc3" font-family="Arial, sans-serif" font-size="16" font-weight="700" letter-spacing="1.3">
      DOENÇAS OCUPACIONAIS  ·  CONCAUSA  ·  BENEFÍCIOS
    </text>

    <rect x="64" y="528" width="186" height="38" rx="19" fill="#e8ccc3" fill-opacity="0.08" stroke="#b66f50" stroke-opacity="0.72" />
    <circle cx="85" cy="547" r="4" fill="#b66f50" />
    <text x="100" y="552" fill="#fff8f2" font-family="Arial, sans-serif" font-size="12" font-weight="700" letter-spacing="1.8">
      PRÉVIA CONCEITUAL
    </text>

    <rect x="1167" y="44" width="3" height="118" fill="#8f5541" fill-opacity="0.44" />
    <rect x="1128" y="44" width="42" height="3" fill="#8f5541" fill-opacity="0.44" />
  </svg>
`);

const resizedLogo = await sharp(logoPath)
  .resize({ width: 264, height: 68, fit: "contain" })
  .png()
  .toBuffer();

const signatureWidth = 204;
const signatureMask = await sharp(resizedLogo)
  .extract({ left: 0, top: 0, width: signatureWidth, height: 68 })
  .png()
  .toBuffer();
const signature = await sharp({
  create: {
    width: signatureWidth,
    height: 68,
    channels: 4,
    background: { r: 255, g: 248, b: 242, alpha: 1 },
  },
})
  .composite([{ input: signatureMask, blend: "dest-in" }])
  .png()
  .toBuffer();
const scaleMarkRaw = await sharp(resizedLogo)
  .extract({ left: signatureWidth, top: 0, width: 60, height: 68 })
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });
for (let index = 0; index < scaleMarkRaw.data.length; index += 4) {
  if (scaleMarkRaw.data[index + 1] < 18) scaleMarkRaw.data[index + 3] = 0;
}
const scaleMark = await sharp(scaleMarkRaw.data, { raw: scaleMarkRaw.info })
  .png()
  .toBuffer();
const logo = await sharp({
  create: {
    width: 264,
    height: 68,
    channels: 4,
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  },
})
  .composite([
    { input: signature, left: 0, top: 0 },
    { input: scaleMark, left: signatureWidth, top: 0 },
  ])
  .png()
  .toBuffer();

const portrait = await sharp(portraitPath)
  .resize({ width: 535, height: 630, fit: "cover", position: "centre" })
  .jpeg({ quality: 92, chromaSubsampling: "4:4:4" })
  .toBuffer();

const result = await sharp({
  create: {
    width: 1200,
    height: 630,
    channels: 3,
    background: "#1c1716",
  },
})
  .composite([
    { input: portrait, left: 665, top: 0 },
    { input: overlay, left: 0, top: 0 },
    { input: logo, left: 64, top: 54 },
  ])
  .jpeg({ quality: 88, progressive: true, chromaSubsampling: "4:4:4" })
  .toFile(outputPath);

console.log(
  JSON.stringify(
    {
      outputPath,
      width: result.width,
      height: result.height,
      format: result.format,
      bytes: result.size,
    },
    null,
    2,
  ),
);
