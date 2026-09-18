import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const logoPath = new URL("../public/pgestao-consultoria/logotipo.jpeg", import.meta.url);
const outputPath = new URL("../public/pgestao-consultoria/og-image.png", import.meta.url);
const logo = (await readFile(logoPath)).toString("base64");

const browser = await chromium.launch({ headless: true });
try {
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  await page.setContent(`<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8"><style>
*{box-sizing:border-box}html,body{margin:0;width:1200px;height:630px;overflow:hidden}
body{background:#401824;color:#fff9f0;font-family:Arial,Helvetica,sans-serif}
.canvas{position:relative;width:1200px;height:630px;display:flex;align-items:center;padding:72px 79px;background:radial-gradient(circle at 80% 48%,#693342 0,#4c202e 39%,#38151f 100%)}
.canvas:before{content:"";position:absolute;width:610px;height:610px;right:-94px;top:9px;border:1px solid #cba88945;border-radius:50%;box-shadow:0 0 0 75px #cba8890a,0 0 0 150px #cba88908}
.copy{position:relative;z-index:1;width:690px}.eyebrow{display:flex;align-items:center;gap:13px;color:#dbbd9f;letter-spacing:4px;font-size:16px;font-weight:700}.eyebrow:before{content:"";width:34px;height:1px;background:#dbbd9f}
h1{font-family:Georgia,'Times New Roman',serif;font-size:68px;line-height:1.05;font-weight:400;letter-spacing:-3.5px;margin:41px 0 27px}em{color:#dfbda7;font-weight:400}
p{font-size:22px;line-height:1.45;color:#eadad3;margin:0;max-width:580px}.bottom{position:absolute;left:79px;bottom:49px;font-size:15px;letter-spacing:2.5px;color:#c7a9a1}
.logo{position:absolute;z-index:2;right:82px;top:151px;width:298px;height:298px;object-fit:cover;border:1px solid #ddc5ab4d;box-shadow:0 25px 60px #230d17aa}
</style></head><body><div class="canvas"><div class="copy"><div class="eyebrow">PRÉVIA CONCEITUAL</div><h1>Seu dinheiro<br>mais claro.<br><em>Suas decisões</em><br>mais seguras.</h1><p>Planilhas financeiras com a visão da P Gestão & Consultoria.</p></div><img class="logo" src="data:image/jpeg;base64,${logo}" alt=""><div class="bottom">P GESTÃO & CONSULTORIA</div></div></body></html>`, { waitUntil: "load" });
  await page.screenshot({ path: fileURLToPath(outputPath), animations: "disabled" });
} finally {
  await browser.close();
}
