function extractGoogleDocId(url: string): string | null {
  const match = url.match(/\/document\/d\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
}

export async function fetchGoogleDocAsMarkdown(docUrlOrId: string): Promise<string> {
  const docId = extractGoogleDocId(docUrlOrId) ?? docUrlOrId;
  const res = await fetch(`https://docs.google.com/document/d/${docId}/export?format=md`);
  if (!res.ok) {
    throw new Error(
      "Não foi possível importar o Google Doc. Confirme se o link está correto e se o documento está compartilhado como \"Qualquer pessoa com o link pode visualizar\"."
    );
  }
  return res.text();
}
