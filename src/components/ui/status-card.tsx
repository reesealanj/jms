import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { CardTitle, CardHeader, CardContent, Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

import { InfoCircleSVG } from '@/components/svg'

export const StatusCard = () => {
  return (
    <Card className='flex relative'>
      <div className='absolute top-0 right-0 p-2'>
        <Button size='sm' variant='ghost'>
          <InfoCircleSVG />
          <span className='sr-only'>More information</span>
        </Button>
      </div>
      <CardHeader>
        <CardTitle className='text-sm'>Open Services</CardTitle>
      </CardHeader>
      <CardContent className='text-xs items-baseline'>
        <p>Tracking data...</p>
      </CardContent>
    </Card>
  )
}
