import { SVGInputType } from '@/lib/types/svg'
import { SVGBase } from './svg-base'

export const InfoCircleSVG = (props: SVGInputType) => {
  return (
    <SVGBase {...props}>
      <circle cx='12' cy='12' r='10' />
      <path d='M12 16v-4' />
      <path d='M12 8h.01' />
    </SVGBase>
  )
}
