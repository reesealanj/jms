export interface SVGInputType {
  className?: string,
  height?: string,
  width?: string,
  fill?: string,
  stroke?: string,
}

export interface BaseSVGInput extends SVGInputType  {
  children: React.ReactNode
}