'use client'

import { createContext, useContext, useState } from 'react'
import type { ModalContextProps } from '@/lib/types/modal'

const defaultState: ModalContextProps = {
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
}

const ModalContext = createContext(defaultState)

export function ModalProvider(props: { children: React.ReactNode }) {
  const [open, setIsOpen] = useState<boolean>(false)

  function openModal() {
    setIsOpen(true)
  }
  function closeModal() {
    setIsOpen(false)
  }

  return <ModalContext.Provider value={{ isOpen: open, openModal, closeModal }}>{props.children}</ModalContext.Provider>
}

export function useModal() {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModal failure: modal context must be used inside ModalProvider.')
  }
  return context
}
