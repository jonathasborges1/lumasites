"use client";

import { useRef, useState } from "react";
import { UploadCloud } from "lucide-react";
import { KM_COLORS, KM_FONT_BODY } from "@/lib/karenmoraes/theme";
import { KM_MAX_UPLOAD_BYTES, KM_MAX_UPLOAD_MB } from "@/lib/karenmoraes/config";

export default function FileDropZone({
  accept,
  file,
  onFileSelected,
  disabled,
  label,
  maxSizeBytes = KM_MAX_UPLOAD_BYTES,
}: {
  accept: string;
  file: File | null;
  onFileSelected: (file: File | null) => void;
  disabled?: boolean;
  label: string;
  maxSizeBytes?: number;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = useState(false);
  const [sizeError, setSizeError] = useState<string | null>(null);

  function handleFile(candidate: File | undefined | null) {
    if (!candidate) return;
    if (candidate.size > maxSizeBytes) {
      setSizeError(
        `"${candidate.name}" tem ${(candidate.size / (1024 * 1024)).toFixed(1)}MB — o limite é ${KM_MAX_UPLOAD_MB}MB. Escolha um arquivo menor.`
      );
      return;
    }
    setSizeError(null);
    onFileSelected(candidate);
  }

  return (
    <div style={{ marginBottom: 12 }}>
      <div
        onClick={() => !disabled && inputRef.current?.click()}
        onKeyDown={(e) => {
          if (!disabled && (e.key === "Enter" || e.key === " ")) inputRef.current?.click();
        }}
        role="button"
        tabIndex={disabled ? -1 : 0}
        onDragOver={(e) => {
          e.preventDefault();
          if (!disabled) setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragOver(false);
          if (disabled) return;
          handleFile(e.dataTransfer.files?.[0]);
        }}
        style={{
          border: `2px dashed ${sizeError ? "crimson" : dragOver ? KM_COLORS.wine : KM_COLORS.border}`,
          background: dragOver ? KM_COLORS.champagne : KM_COLORS.white,
          borderRadius: 10,
          padding: "28px 16px",
          textAlign: "center",
          cursor: disabled ? "not-allowed" : "pointer",
          transition: "border-color .15s, background .15s",
          opacity: disabled ? 0.6 : 1,
        }}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          disabled={disabled}
          onChange={(e) => handleFile(e.target.files?.[0])}
          style={{ display: "none" }}
        />
        <UploadCloud size={26} color={KM_COLORS.wine} style={{ margin: "0 auto 8px" }} />
        <p style={{ fontFamily: KM_FONT_BODY, fontSize: 14, color: KM_COLORS.text, fontWeight: 600, margin: 0 }}>
          {file ? file.name : label}
        </p>
        <p style={{ fontFamily: KM_FONT_BODY, fontSize: 12, color: KM_COLORS.muted, margin: "4px 0 0" }}>
          {file
            ? "Clique ou arraste outro arquivo para substituir"
            : `Clique para escolher ou arraste o arquivo aqui — até ${KM_MAX_UPLOAD_MB}MB`}
        </p>
      </div>
      {sizeError && (
        <p style={{ fontFamily: KM_FONT_BODY, fontSize: 13, color: "crimson", marginTop: 6 }}>{sizeError}</p>
      )}
    </div>
  );
}
