import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { CardTitle, CardHeader, CardContent, Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { InfoCircleSVG } from '@/components/svg'
import { BaseStatusInput } from '@/lib/types/status-card'

export const BaseStatusCard = ({ title, value, tooltipValue }: BaseStatusInput) => {
  return (
    <Card className='flex relative'>
      {tooltipValue ? (
        <div className='absolute top-0 right-0 p-2'>
          <Button size='sm' variant='ghost'>
            <InfoCircleSVG />
            <span className='sr-only'>{tooltipValue}</span>
          </Button>
        </div>
      ) : null}
      <CardHeader>
        <CardTitle className='text-sm'>{title}</CardTitle>
      </CardHeader>
      <CardContent className='text-xs my-auto baseline'>
        <p>{value}</p>
      </CardContent>
    </Card>
  )
}
