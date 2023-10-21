import { BaseStatusCard } from '@/components/ui/status-cards/base-status-card'
import { ServicesApi } from '@/lib/api/services-api'

export const AwaitingCustomerServicesCard = async () => {
  const displayValue = await ServicesApi.getServicesPendingCustomer()

  return (
    <BaseStatusCard
      title='Awaiting Customer'
      value={displayValue}
      tooltipValue='Total services that need customer input. (Need a call back, or service is done)'
    />
  )
}
