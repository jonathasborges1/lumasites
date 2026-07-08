import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const blogDir = path.join(root, "public", "blog");

const images = [
  "cliente-no-google-manaus.png",
  "criacao-de-sites-em-manaus.png",
  "site-para-advogados-em-manaus.png",
  "site-para-dentista-em-manaus.png",
  "site-para-medico-em-manaus.png",
  "site-para-personal-trainer-em-manaus.png",
  "site-para-psicologo-em-manaus.png",
];

for (const image of images) {
  const input = path.join(blogDir, image);
  const output = path.join(blogDir, image.replace(/\.png$/, ".webp"));

  await sharp(input)
    .resize({ width: 1200, withoutEnlargement: true })
    .webp({ quality: 78, effort: 6 })
    .toFile(output);

  const metadata = await sharp(output).metadata();
  console.log(`${path.basename(output)} - ${metadata.width}x${metadata.height}`);
}
