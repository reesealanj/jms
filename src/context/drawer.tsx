'use client'

import { createContext, useContext, useState } from 'react'
import type { DrawerContextProps } from '@/lib/types/drawer'

const DrawerContext = createContext<DrawerContextProps>({
  isOpen: false,
  contents: 'default',
  toggleFn: () => {},
})

export function DrawerContextProvider(props: DrawerContextProps) {}
