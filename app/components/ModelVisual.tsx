import { FiArrowUpRight } from "react-icons/fi";
import type { ModelVisualProps } from "@/app/types";

const visualThemes = [
  "bg-[linear-gradient(135deg,#d77c52,#6b3c35)]",
  "bg-[linear-gradient(135deg,#8d9b85,#354d48)]",
  "bg-[linear-gradient(135deg,#e0b36d,#875340)]",
  "bg-[linear-gradient(135deg,#7896a0,#304d58)]",
  "bg-[linear-gradient(135deg,#bc8a9f,#593b57)]",
] as const;

export default function ModelVisual({ model, className = "" }: ModelVisualProps) {
  const theme = visualThemes[model.id % visualThemes.length];

  return (
    <div
      className={`flex aspect-[1.18] items-start justify-between p-4 text-xs font-bold tracking-widest text-white/85 ${theme} ${className}`}
      aria-hidden="true"
    >
      <span>{String(model.id).padStart(2, "0")}</span>
      <FiArrowUpRight size={20} />
    </div>
  );
}