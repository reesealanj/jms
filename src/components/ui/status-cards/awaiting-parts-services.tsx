import { BaseStatusCard } from '@/components/ui/status-cards/base-status-card'
import { ServicesApi } from '@/lib/api/services-api'

export async function AwaitingPartsServicesCard() {
  const displayValue = await ServicesApi.getServicesPendingParts()

  return (
    <BaseStatusCard
      title='Awaiting Parts'
      value={displayValue}
      tooltipValue='Total services that need parts (whether they have or have not been ordered).'
    />
  )
}
