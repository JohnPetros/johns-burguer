import type { RefObject } from 'react'

import { Icon } from '../../Icon'
import { Modal } from '../../Modal'
import type { ModalRef } from '../../Modal/types/ModalRef'

import { useCongratulationsModal } from './useCongratulationsModal'

type CongratulationsModalProps = {
  modalRef: RefObject<ModalRef>
  customerName: string
}

export function CongratulationsModal({
  modalRef,
  customerName,
}: CongratulationsModalProps) {
  const { handleModalClose } = useCongratulationsModal()

  return (
    <Modal
      ref={modalRef}
      onAction={handleModalClose}
      onClose={handleModalClose}
      title='Congratulations 🍔!'
      trigger={null}
      className='min-h-[12rem]'
      hasOnlyAction={true}
    >
      <div className='flex bg-green-600 text-gray-50 rounded-md overflow-hidden mt-6'>
        <div className='bg-green-800 w-16 grid place-content-center'>
          <Icon value='check' className='text-gray-50' />
        </div>
        <div className='flex-1 grid place-content-center p-4'>
          <p className='text-sm text-center'>Payment is confirmed</p>
          <strong className='mt-1 text-xl font-semibold text-center'>
            Delivery in up to 12 minutes
          </strong>
        </div>
      </div>

      <div className='mt-6'>
        <p className='text-center text-lg'>
          <span className='text-orange-500 font-semibold text-2xl'>{customerName}</span>{' '}
          <br />
          We appreciate your confidence!
        </p>
      </div>
      <div className='bg-gray-900 bg-opacity-75 mt-12 p-3 rounded-md'>
        <p className='text-center text-gray-100'>
          See you <span aria-hidden='true'>;)</span>
        </p>
      </div>
    </Modal>
  )
}
