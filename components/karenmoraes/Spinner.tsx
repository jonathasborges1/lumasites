const SPINNER_CSS = `
  @keyframes km-spin { to { transform: rotate(360deg); } }
  .km-spinner { display:inline-block; border-radius:50%; border-style:solid; border-color:currentColor; border-right-color:transparent; animation:km-spin .7s linear infinite; vertical-align:middle; flex-shrink:0; }
`;

/** Indicador de carregamento animado — usar apenas enquanto uma operação assíncrona real estiver em andamento. */
export default function Spinner({ size = 14 }: { size?: number }) {
  return (
    <>
      <style>{SPINNER_CSS}</style>
      <span className="km-spinner" style={{ width: size, height: size, borderWidth: Math.max(2, size / 6) }} aria-hidden="true" />
    </>
  );
}
