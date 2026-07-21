"use client";

import { useRef, useState } from "react";
import { UploadCloud } from "lucide-react";
import { KM_COLORS, KM_FONT_BODY } from "@/lib/karenmoraes/theme";

export default function FileDropZone({
  accept,
  file,
  onFileSelected,
  disabled,
  label,
}: {
  accept: string;
  file: File | null;
  onFileSelected: (file: File | null) => void;
  disabled?: boolean;
  label: string;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = useState(false);

  return (
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
        const dropped = e.dataTransfer.files?.[0];
        if (dropped) onFileSelected(dropped);
      }}
      style={{
        border: `2px dashed ${dragOver ? KM_COLORS.wine : KM_COLORS.border}`,
        background: dragOver ? KM_COLORS.champagne : KM_COLORS.white,
        borderRadius: 10,
        padding: "28px 16px",
        textAlign: "center",
        cursor: disabled ? "not-allowed" : "pointer",
        marginBottom: 12,
        transition: "border-color .15s, background .15s",
        opacity: disabled ? 0.6 : 1,
      }}
    >
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        disabled={disabled}
        onChange={(e) => onFileSelected(e.target.files?.[0] ?? null)}
        style={{ display: "none" }}
      />
      <UploadCloud size={26} color={KM_COLORS.wine} style={{ margin: "0 auto 8px" }} />
      <p style={{ fontFamily: KM_FONT_BODY, fontSize: 14, color: KM_COLORS.text, fontWeight: 600, margin: 0 }}>
        {file ? file.name : label}
      </p>
      <p style={{ fontFamily: KM_FONT_BODY, fontSize: 12, color: KM_COLORS.muted, margin: "4px 0 0" }}>
        {file ? "Clique ou arraste outro arquivo para substituir" : "Clique para escolher ou arraste o arquivo aqui"}
      </p>
    </div>
  );
}
