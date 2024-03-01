import { Dialog, Transition } from '@headlessui/react'
import { Slot } from '@radix-ui/react-slot'
import {
  type ForwardedRef,
  Fragment,
  type ReactNode,
  forwardRef,
  useImperativeHandle,
} from 'react'

import { Icon } from '../Icon'

import type { ModalRef } from './types/ModalRef'
import { useModal } from './useModal'

type ModalProps = {
  title?: string
  children: ReactNode
  trigger: ReactNode
  onClose?: () => void
}

const ModalComponent = (
  { children, trigger, title, onClose }: ModalProps,
  ref: ForwardedRef<ModalRef>
) => {
  const { open, close, isOpen } = useModal(onClose)

  useImperativeHandle(ref, () => {
    return {
      open,
      close,
    }
  })

  return (
    <>
      <Slot onClick={open}>{trigger}</Slot>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={close}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black/25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full min-h-[75vh] max-h-[75vh] max-w-lg transform overflow-auto rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <header className='flex justify-end'>
                    {title && (
                      <Dialog.Title
                        as='h3'
                        className='text-lg font-medium leading-6 text-gray-900 w-full shrink-0'
                      >
                        {title}
                      </Dialog.Title>
                    )}
                    <button onClick={close} type='button' aria-label='Close modal'>
                      <Icon value='close' className='text-gray-800' />
                    </button>
                  </header>
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export const Modal = forwardRef(ModalComponent)
