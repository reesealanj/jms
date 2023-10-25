import { BaseStatusCard } from '@/components/ui/status-cards/base-status-card'
import { ServicesApi } from '@/lib/api/services-api'

export async function OpenServicesCard() {
  const displayValue = await ServicesApi.getAllOpenServices()

  return (
    <BaseStatusCard
      title='Open Services'
      value={displayValue}
      tooltipValue='Total services in an "open" state (anything but closed)'
    />
  )
}
