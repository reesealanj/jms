import { BreadcrumbInput, BreadcrumbItem } from '@/lib/types/breadcrumb'
import Link from 'next/link'

export const Breadcrumbs = (props: BreadcrumbInput) => {
  const breadcrumbs = props?.items ?? [{ href: '/', title: 'Home' }]

  return (
    <div className='flex items-center gap-2'>
      {breadcrumbs.map((breadcrumb, index) => {
        return (
          <Breadcrumb
            href={breadcrumb.href}
            title={breadcrumb.title}
            caret={index === breadcrumbs.length - 1 ? false : true}
            key={`breadcrumb-${index}`}
          />
        )
      })}
    </div>
  )
}

export const Breadcrumb = ({ href, title, caret }: BreadcrumbItem & { caret: boolean }) => {
  return (
    <>
      <Link className='text-zinc-500 dark:text-zinc-400' href={href ?? '#'}>
        {title ?? 'Home'}
      </Link>
      {caret ? <BreadcrumbSeparator /> : null}
    </>
  )
}

export const BreadcrumbSeparator = () => {
  return <span className='text-zinc-500 dark:text-zinc-400'>{`>`}</span>
}
