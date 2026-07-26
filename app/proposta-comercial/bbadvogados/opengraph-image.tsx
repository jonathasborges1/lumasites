import { ImageResponse } from "next/og";

export const alt = "Bergamaschi & Bergamaschi — Direito que move resultados";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background:
            "radial-gradient(circle at 84% 18%, #1b5277 0, #0b3552 23%, transparent 48%), linear-gradient(135deg, #02131f 0%, #082943 58%, #031b2d 100%)",
          color: "#ffffff",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 34,
            display: "flex",
            border: "1px solid rgba(213,183,120,.42)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -250,
            right: -160,
            width: 620,
            height: 620,
            display: "flex",
            border: "1px solid rgba(213,183,120,.18)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "76px 84px 70px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div
              style={{
                width: 72,
                height: 72,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #d5b778",
                borderRadius: "50%",
                color: "#d5b778",
                fontSize: 25,
                letterSpacing: -2,
              }}
            >
              B&B
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              <span style={{ fontSize: 25, fontWeight: 700 }}>
                Bergamaschi & Bergamaschi
              </span>
              <span
                style={{
                  color: "#d5b778",
                  fontFamily: "Arial, sans-serif",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                }}
              >
                Advogados Associados
              </span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                color: "#d5b778",
                fontFamily: "Arial, sans-serif",
                fontSize: 15,
                fontWeight: 700,
                letterSpacing: 4,
                textTransform: "uppercase",
              }}
            >
              Excelência jurídica com propósito
            </span>
            <div
              style={{
                maxWidth: 870,
                marginTop: 20,
                display: "flex",
                flexDirection: "column",
                fontSize: 78,
                lineHeight: 0.98,
                letterSpacing: -4,
              }}
            >
              <span>Direito que move</span>
              <span style={{ color: "#d5b778", fontStyle: "italic" }}>
                resultados.
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: 26,
              color: "rgba(255,255,255,.75)",
              fontFamily: "Arial, sans-serif",
              fontSize: 16,
              letterSpacing: 1,
            }}
          >
            <span>20 anos de história</span>
            <span style={{ color: "#d5b778" }}>•</span>
            <span>20 mil+ processos</span>
            <span style={{ color: "#d5b778" }}>•</span>
            <span>Atuação nacional</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
