import { NextRequest, NextResponse } from "next/server";
import { fetchGoogleDocAsMarkdown } from "@/lib/karenmoraes/googleDocs";
import { convertDocxToMarkdown } from "@/lib/karenmoraes/docx";
import { deriveTitleAndExcerpt } from "@/lib/karenmoraes/extract";
import { assertUploadSize } from "@/lib/karenmoraes/config";

export async function POST(request: NextRequest) {
  const form = await request.formData();
  const source = form.get("source");

  try {
    let content: string;

    if (source === "gdoc") {
      const url = form.get("googleDocUrl");
      if (typeof url !== "string" || !url) {
        return NextResponse.json({ error: "Informe o link do Google Doc" }, { status: 400 });
      }
      content = await fetchGoogleDocAsMarkdown(url);
    } else if (source === "docx") {
      const file = form.get("docxFile");
      if (!(file instanceof File)) {
        return NextResponse.json({ error: "Envie um arquivo .docx" }, { status: 400 });
      }
      assertUploadSize(file);
      content = await convertDocxToMarkdown(Buffer.from(await file.arrayBuffer()));
    } else {
      return NextResponse.json({ error: "Origem inválida" }, { status: 400 });
    }

    const { title, excerpt } = deriveTitleAndExcerpt(content);
    return NextResponse.json({ content, suggestedTitle: title, suggestedExcerpt: excerpt });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 422 });
  }
}
