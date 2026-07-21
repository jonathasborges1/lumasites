import mammoth from "mammoth";
import TurndownService from "turndown";

const turndown = new TurndownService({ headingStyle: "atx" });

export async function convertDocxToMarkdown(buffer: Buffer): Promise<string> {
  const { value: html } = await mammoth.convertToHtml({ buffer });
  return turndown.turndown(html);
}
