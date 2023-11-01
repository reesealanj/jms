import { SVGInputType } from "@/lib/types/svg";
import { SVGBase } from "./svg-base";

export function CloseSVG(props: SVGInputType) {
  return (
    <SVGBase {...props}>
      <rect height="18" rx="2" ry="2" width="18" x="3" y="3" />
      <line x1="3" x2="21" y1="9" y2="9" />
      <path d="m9 16 3-3 3 3" />
    </SVGBase>
  );
}
