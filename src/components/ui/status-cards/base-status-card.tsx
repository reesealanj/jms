import { CardTitle, CardHeader, CardContent, Card } from '@/components/ui/card'
import { BaseStatusInput } from '@/lib/types/status-card'

export const BaseStatusCard = ({ title, value }: BaseStatusInput) => {
  return (
    <Card className='flex relative'>
      <CardHeader>
        <CardTitle className='text-md'>{title}</CardTitle>
      </CardHeader>
      <CardContent className='text-md pt-6'>
        <p className=''>{value}</p>
      </CardContent>
    </Card>
  )
}
