'use client'

import { createContext, useContext, useState } from 'react'

const GlobalSearchContext = createContext({ value: '', updateSearch: (value: string) => {} })

export const GlobalSearchProvider = (props: { value?: string; children: React.ReactNode }) => {
  const [value, setSearchValue] = useState<string>(props?.value ?? 'hello')

  return (
    <GlobalSearchContext.Provider value={{ value, updateSearch: setSearchValue }}>
      {props.children}
    </GlobalSearchContext.Provider>
  )
}

export const useGlobalSearch = () => {
  const context = useContext(GlobalSearchContext)
  if (!context) {
    throw new Error('useGlobalSearch failure: global search context must be used inside a GlobalSearchProvider')
  }
  return context
}