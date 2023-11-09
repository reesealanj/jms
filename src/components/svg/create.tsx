import { SVGInputType } from "@/lib/types/svg";
import { SVGBase } from "./svg-base";

export function CreateSVG(props: SVGInputType) {
  return (
    <SVGBase {...props}>
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </SVGBase>
  );
}
