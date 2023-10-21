'use client'
import { SearchInput } from '@/components/layout/search-input'
import { MagnifyingGlassSVG } from '@/components/svg'
import { Button } from '@/components/ui/button'

import { useModal } from '@/context/modal'

export const NavbarSearch = () => {
  const { openModal } = useModal()

  return (
    <div className='flex items-center justify-between w-1/3'>
      <SearchInput />
      <Button className='ml-2' variant='outline' onClick={() => openModal()}>
        <MagnifyingGlassSVG />
      </Button>
    </div>
  )
}
