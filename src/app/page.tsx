'use client'
import { CardTitle, CardHeader, CardContent, Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { SidebarLayout } from '@/components/layout'
import { InfoCircleSVG } from '@/components/svg'
import { ServiceTable } from '@/components/ui/service/service-table'
import { BaseStatusCard } from '@/components/ui/status-cards/base-status-card'

export default function Home() {
  return (
    <SidebarLayout>
      <div className='grid grid-cols-2 gap-4'>
        <BaseStatusCard title={'Open Services'} value={'Loading...'} tooltipValue={'More information'} />
      </div>
      <ServiceTable />
    </SidebarLayout>
  )
}
