/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/VVMjDeDnWa6
 */
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { BookSVG, BoxSVG, GearSVG, MagnifyingGlassSVG, PersonOutlineSVG, UsersSVG } from '@/components/svg'
import { Breadcrumbs, SearchInput } from '@/components/layout'

export function SidebarLayout({ children }: { children: React.ReactNode }) {
  return (
    <div key='1' className='grid h-screen w-full grid-cols-[280px_1fr] overflow-hidden'>
      <div className='border-r bg-zinc-100/40 dark:bg-zinc-800/40'>
        <div className='px-4 py-6'>
          <h1 className='text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-4 text-left'>Johnson Marine</h1>
          <nav className='flex flex-col items-start gap-4'>
            <Link
              className='flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-500 transition-all hover:bg-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-700'
              href='#'
            >
              <BookSVG />
              Services
            </Link>
            <Link
              className='flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-500 transition-all hover:bg-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-700'
              href='#'
            >
              <UsersSVG />
              Users
            </Link>
            <Link
              className='flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-500 transition-all hover:bg-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-700'
              href='#'
            >
              <BoxSVG />
              Parts
            </Link>
            <Link
              className='flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-500 transition-all hover:bg-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-700'
              href='#'
            >
              <GearSVG />
              Settings
            </Link>
            <Link
              className='flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-500 transition-all hover:bg-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-700'
              href='#'
            >
              <BookSVG />
              Guides
            </Link>
            <Link
              className='flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-500 transition-all hover:bg-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-700'
              href='#'
            >
              <PersonOutlineSVG />
              Profile
            </Link>
          </nav>
        </div>
      </div>
      <main className='flex flex-col overflow-auto p-6'>
        <div className='flex items-center justify-between py-2 px-4 mb-4 bg-white dark:bg-zinc-800 rounded-lg shadow-sm'>
          <Breadcrumbs
            items={[
              {
                href: '/',
                title: 'Home',
              },
              {
                href: '/services',
                title: 'Services',
              },
            ]}
          />
          <div className='flex items-center justify-between w-1/3'>
            <SearchInput />
            <Button className='ml-2' variant='outline'>
              <MagnifyingGlassSVG />
            </Button>
          </div>
        </div>
        {children}
      </main>
    </div>
  )
}