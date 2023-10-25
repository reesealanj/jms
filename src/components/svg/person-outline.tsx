import { SVGInputType } from '@/lib/types/svg'
import { SVGBase } from './svg-base'

export function PersonOutlineSVG(props: SVGInputType) {
  return (
    <SVGBase {...props}>
      <path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' />
      <circle cx='12' cy='7' r='4' />
    </SVGBase>
  )
}
