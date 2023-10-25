'use client'
import { useModal } from '@/context/modal'

export function ModalBase({ children }: { children: React.ReactNode }) {
  const { isOpen, closeModal } = useModal()

  return (
    <div
      className={`${isOpen ? '' : 'hidden'} fixed z-50 h-full w-full bg-black/40 top-0 left-0 overflow-auto`}
      onClick={() => closeModal()}
    >
      <div className='w-[50%] h-[30%] bg-white color-black rounded-xl mx-auto opacity-100 mt-[25%]'>{children}</div>
    </div>
  )
}
