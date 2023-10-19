'use client'
import { CardTitle, CardHeader, CardContent, Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { SidebarLayout } from '@/components/layout'
import { InfoCircleSVG } from '@/components/svg'
import { ServiceTable } from '@/components/ui/service/service-table'

export default function Home() {
  return (
    <SidebarLayout>
      <div className='grid grid-cols-2 gap-4'>
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
        <Card className='flex relative'>
          <div className='absolute top-0 right-0 p-2'>
            <Button size='sm' variant='ghost'>
              <InfoCircleSVG />
              <span className='sr-only'>More information</span>
            </Button>
          </div>
          <CardHeader>
            <CardTitle className='text-sm'>Awaiting Customer</CardTitle>
          </CardHeader>
          <CardContent className='text-xs'>
            <p>Tracking data...</p>
          </CardContent>
        </Card>
      </div>
      <ServiceTable />
    </SidebarLayout>
  )
}
