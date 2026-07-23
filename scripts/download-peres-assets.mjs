import { mkdir, readFile, writeFile } from "node:fs/promises";

const audit = JSON.parse(await readFile("docs/peres-designs-auditoria/audit.json", "utf8"));
const destination = "public/images/peresdesigns";
await mkdir(destination, { recursive: true });

const heroMatch = audit.desktop.backgrounds
  .find((item) => item.id === "hero" && item.image.includes("url("))
  ?.image.match(/url\("(.+)"\)/);

const assets = [
  ["hero.jpg", heroMatch?.[1]],
  ["projeto-giselle-moraes.png", audit.desktop.images[0]?.src],
  ["projeto-lev-cream.png", audit.desktop.images[1]?.src],
  ["projeto-claus.jpg", audit.desktop.images[2]?.src],
  ["projeto-paulo-rodrigo.png", audit.desktop.images[3]?.src],
  ["social-01.png", audit.desktop.images[4]?.src],
  ["social-02.png", audit.desktop.images[5]?.src],
  ["social-03.jpg", audit.desktop.images[6]?.src],
  ["social-04.jpg", audit.desktop.images[7]?.src],
  ["social-05.jpg", audit.desktop.images[8]?.src],
  ["social-06.png", audit.desktop.images[9]?.src],
  ["kethelyn-peres.jpg", audit.desktop.images.at(-1)?.src],
];

for (const [filename, url] of assets) {
  if (!url) throw new Error(`URL ausente para ${filename}`);
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${filename}: HTTP ${response.status}`);
  const bytes = Buffer.from(await response.arrayBuffer());
  await writeFile(`${destination}/${filename}`, bytes);
  console.log(`${filename}: ${bytes.length} bytes (${response.headers.get("content-type")})`);
}
