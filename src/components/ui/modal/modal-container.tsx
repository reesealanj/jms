'use client'

import { ModalBase } from '@/components/ui/modal/modal-base'
import { Button } from '@/components/ui/button'
import { useModal } from '@/context/modal'

export const ModalContainer = ({}) => {
  const { closeModal } = useModal()

  return (
    <ModalBase>
      <div>
        modal content
        <Button onClick={() => closeModal()}>Exit</Button>
      </div>
    </ModalBase>
  )
}
