import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";

const outDir = "docs/peres-designs-auditoria";
await mkdir(outDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const results = {};

for (const profile of [
  { name: "desktop", viewport: { width: 1440, height: 1000 } },
  { name: "mobile", viewport: { width: 390, height: 844 } },
]) {
  const page = await browser.newPage({ viewport: profile.viewport, deviceScaleFactor: 1 });
  const requests = [];
  page.on("response", (response) => {
    const request = response.request();
    requests.push({
      url: response.url(),
      status: response.status(),
      type: request.resourceType(),
      size: Number(response.headers()["content-length"] || 0),
    });
  });

  const started = Date.now();
  await page.goto("https://peresdesigns.com.br/", { waitUntil: "networkidle", timeout: 60_000 });
  const elapsedMs = Date.now() - started;
  await page.evaluate(async () => {
    for (let y = 0; y < document.documentElement.scrollHeight; y += innerHeight * 0.75) {
      scrollTo(0, y);
      await new Promise((resolve) => setTimeout(resolve, 120));
    }
    scrollTo(0, 0);
  });
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${outDir}/${profile.name}-full.png`, fullPage: true });

  const data = await page.evaluate(() => {
    const css = (el) => getComputedStyle(el);
    const rect = (el) => {
      const r = el.getBoundingClientRect();
      return { x: Math.round(r.x), y: Math.round(r.y), width: Math.round(r.width), height: Math.round(r.height) };
    };
    const summarize = (el) => ({
      tag: el.tagName.toLowerCase(),
      id: el.id || null,
      classes: String(el.className || "").slice(0, 300),
      text: (el.innerText || "").replace(/\s+/g, " ").trim().slice(0, 800),
      rect: rect(el),
      background: css(el).backgroundColor,
      color: css(el).color,
      font: `${css(el).fontWeight} ${css(el).fontSize}/${css(el).lineHeight} ${css(el).fontFamily}`,
      padding: css(el).padding,
      display: css(el).display,
    });
    const nav = document.querySelector("nav, header");
    const sections = [...document.querySelectorAll("main section, body > #root > div > section")];
    const headings = [...document.querySelectorAll("h1,h2,h3")].map(summarize);
    const links = [...document.querySelectorAll("a")].map((a) => ({
      text: (a.innerText || a.getAttribute("aria-label") || "").replace(/\s+/g, " ").trim(),
      href: a.href,
      rect: rect(a),
      color: css(a).color,
      background: css(a).backgroundColor,
    }));
    const buttons = [...document.querySelectorAll("button")].map(summarize);
    const images = [...document.images].map((img) => ({
      src: img.currentSrc || img.src,
      alt: img.alt,
      natural: [img.naturalWidth, img.naturalHeight],
      rendered: [Math.round(img.getBoundingClientRect().width), Math.round(img.getBoundingClientRect().height)],
      loading: img.loading,
    }));
    const backgrounds = [...document.querySelectorAll("*")]
      .map((el) => ({ image: css(el).backgroundImage, ...summarize(el) }))
      .filter((x) => x.image && x.image !== "none");
    const colors = {};
    for (const el of document.querySelectorAll("*")) {
      for (const value of [css(el).color, css(el).backgroundColor, css(el).borderColor]) {
        if (value && value !== "rgba(0, 0, 0, 0)") colors[value] = (colors[value] || 0) + 1;
      }
    }
    const navTargets = links.filter((x) => x.href.includes(location.host) || x.href.includes("#"));
    const perf = performance.getEntriesByType("navigation")[0];
    return {
      title: document.title,
      viewport: [innerWidth, innerHeight],
      document: [document.documentElement.scrollWidth, document.documentElement.scrollHeight],
      bodyText: document.body.innerText,
      nav: nav ? summarize(nav) : null,
      sections: sections.map(summarize),
      headings,
      links,
      navTargets,
      buttons,
      images,
      backgrounds,
      colors: Object.entries(colors).sort((a, b) => b[1] - a[1]).slice(0, 30),
      overflowX: document.documentElement.scrollWidth > innerWidth,
      performance: perf ? {
        domContentLoaded: Math.round(perf.domContentLoadedEventEnd),
        load: Math.round(perf.loadEventEnd),
        transferSize: perf.transferSize,
      } : null,
    };
  });

  data.elapsedMs = elapsedMs;
  data.requests = requests;
  data.requestSummary = requests.reduce((acc, item) => {
    acc.count += 1;
    acc.bytes += item.size;
    acc.types[item.type] = (acc.types[item.type] || 0) + 1;
    return acc;
  }, { count: 0, bytes: 0, types: {} });
  results[profile.name] = data;
  await page.close();
}

await browser.close();
await writeFile(`${outDir}/audit.json`, JSON.stringify(results, null, 2), "utf8");
console.log(JSON.stringify({
  desktop: {
    sections: results.desktop.sections.length,
    links: results.desktop.links.length,
    images: results.desktop.images.length,
    document: results.desktop.document,
    performance: results.desktop.performance,
    requests: results.desktop.requestSummary,
  },
  mobile: {
    sections: results.mobile.sections.length,
    links: results.mobile.links.length,
    images: results.mobile.images.length,
    document: results.mobile.document,
    overflowX: results.mobile.overflowX,
    performance: results.mobile.performance,
    requests: results.mobile.requestSummary,
  },
}, null, 2));
