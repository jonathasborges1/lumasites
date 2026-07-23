import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";

const outputDirectory = "docs/peres-designs-previa";
const url = "http://localhost:3001/proposta-comercial/peresdesigns";
const profiles = [
  ["desktop", { width: 1440, height: 1000 }],
  ["tablet", { width: 768, height: 1024 }],
  ["mobile", { width: 390, height: 844 }],
];

await mkdir(outputDirectory, { recursive: true });
const browser = await chromium.launch({ headless: true });
const report = {};

for (const [name, viewport] of profiles) {
  const page = await browser.newPage({ viewport, deviceScaleFactor: 1 });
  const errors = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(`console: ${message.text()}`);
  });
  page.on("pageerror", (error) => errors.push(`page: ${error.message}`));

  const response = await page.goto(url, { waitUntil: "networkidle", timeout: 60_000 });

  if (name === "mobile") {
    await page.getByRole("button", { name: "Abrir menu" }).click();
    const mobileMenuVisible = await page.getByRole("navigation", { name: "Navegação móvel" }).isVisible();
    await page.getByRole("button", { name: "Fechar menu" }).click();
    report.mobileMenuVisible = mobileMenuVisible;
  }

  await page.getByRole("tab", { name: /Claus Cabelereiro/ }).click();
  const activeProject = await page.getByRole("tabpanel").getByRole("heading").innerText();
  const serviceSummary = page.locator("details").filter({ hasText: "Ver o que inclui" }).first().locator("summary");
  await serviceSummary.click();
  const serviceDetailsOpen = await serviceSummary.evaluate((element) => element.parentElement?.hasAttribute("open"));

  const metrics = await page.evaluate(() => ({
    title: document.title,
    viewport: { width: innerWidth, height: innerHeight },
    document: {
      width: document.documentElement.scrollWidth,
      height: document.documentElement.scrollHeight,
    },
    overflowX: document.documentElement.scrollWidth > innerWidth,
    h1: document.querySelector("h1")?.textContent?.replace(/\s+/g, " ").trim(),
    sections: [...document.querySelectorAll("main section")].map((section) => section.id),
    emptyLinks: [...document.querySelectorAll("a")]
      .filter((anchor) => !anchor.getAttribute("href") || anchor.getAttribute("href") === "#")
      .length,
    buttons: document.querySelectorAll("button").length,
    details: document.querySelectorAll("details").length,
  }));

  await page.screenshot({ path: `${outputDirectory}/${name}-full.png`, fullPage: true });
  report[name] = {
    status: response?.status(),
    ...metrics,
    activeProject,
    serviceDetailsOpen,
    errors,
  };
  await page.close();
}

await browser.close();
await writeFile(`${outputDirectory}/verification.json`, JSON.stringify(report, null, 2), "utf8");
console.log(JSON.stringify(report, null, 2));
