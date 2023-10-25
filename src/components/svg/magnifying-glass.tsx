import { SVGInputType } from '@/lib/types/svg'
import { SVGBase } from './svg-base'

export function MagnifyingGlassSVG(props: SVGInputType) {
  return (
    <SVGBase {...props}>
      <circle cx='11' cy='11' r='8' />
      <path d='m21 21-4.3-4.3' />
    </SVGBase>
  )
}
