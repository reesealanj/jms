import { BaseSVGInput } from '@/lib/types/svg'

export function SVGBase(props: BaseSVGInput) {
  return (
    <svg
      className={`h-4 w-4 ${props?.className}`}
      fill={props?.fill ? props?.fill : 'none'}
      height={props?.height ? props?.height : '24'}
      stroke={props?.stroke ? props?.stroke : 'currentColor'}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      viewBox='0 0 24 24'
      width={props?.width ? props?.width : '24'}
      xmlns='http://www.w3.org/2000/svg'
    >
      {props.children}
    </svg>
  )
}
