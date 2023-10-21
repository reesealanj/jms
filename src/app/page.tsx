import { SidebarLayout } from '@/components/layout'
import { ModalContainer } from '@/components/ui/modal/modal-container'
import { ServiceTable } from '@/components/ui/service/service-table'
import { AwaitingCustomerServicesCard, OpenServicesCard } from '@/components/ui/status-cards'
import { LoadingStatusFallbackCard } from '@/components/ui/status-cards/loading-card'
import { Suspense } from 'react'

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
      </div>
      <ModalContainer />
      <ServiceTable />
    </SidebarLayout>
  )
}
