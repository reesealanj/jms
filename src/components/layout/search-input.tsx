'use client'
import { useGlobalSearch } from '@/context/global-search'

export function SearchInput() {
  const { value: searchValue, updateSearch } = useGlobalSearch()

  function handleUpdate(e: any) {
    updateSearch(e.target.value)
  }

  return (
    <input
      aria-label='Search'
      className='flex-grow bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 rounded-lg py-2 px-4 text-sm outline-none'
      placeholder='Search...'
      type='text'
      value={searchValue}
      onChange={(e) => handleUpdate(e)}
    />
  )
}
