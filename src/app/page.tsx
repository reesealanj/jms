import { Suspense } from 'react'

import { SidebarLayout } from '@/components/layout'
import {
  AwaitingCustomerServicesCard,
  OpenServicesCard,
  AwaitingPartsServicesCard,
  LoadingStatusFallbackCard,
} from '@/components/ui/status-cards'
import { ServiceTable } from '@/components/ui/service/service-table'

export default function Home() {
  return (
    <SidebarLayout>
      <div className='grid grid-cols-3 gap-4'>
        <Suspense fallback={<LoadingStatusFallbackCard />}>
          <OpenServicesCard />
        </Suspense>
        <Suspense fallback={<LoadingStatusFallbackCard />}>
          <AwaitingCustomerServicesCard />
        </Suspense>
        <Suspense fallback={<LoadingStatusFallbackCard />}>
          <AwaitingPartsServicesCard />
        </Suspense>
      </div>
      <ServiceTable />
    </SidebarLayout>
  )
}
