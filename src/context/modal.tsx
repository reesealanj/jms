'use client'

import { createContext, useContext, useState } from 'react'
import type { ModalContextProps } from '@/lib/types/modal'

const defaultState: ModalContextProps = {
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
}

const ModalContext = createContext(defaultState)

export const ModalProvider = (props: { children: React.ReactNode }) => {
  const [open, setIsOpen] = useState<boolean>(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return <ModalContext.Provider value={{ isOpen: open, openModal, closeModal }}>{props.children}</ModalContext.Provider>
}

export const useModal = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModal failure: modal context must be used inside ModalProvider.')
  }
  return context
}
