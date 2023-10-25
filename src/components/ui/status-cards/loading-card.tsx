import { BaseStatusCard } from '@/components/ui/status-cards/base-status-card'

export async function LoadingStatusFallbackCard() {
  return <BaseStatusCard title='Loading' value='Loading...' tooltipValue='Loading tooltip...' />
}
