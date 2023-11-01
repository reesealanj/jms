import { SVGInputType } from "@/lib/types/svg";
import { SVGBase } from "./svg-base";

export function PencilSVG(props: SVGInputType) {
  return (
    <SVGBase {...props}>
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </SVGBase>
  );
}
