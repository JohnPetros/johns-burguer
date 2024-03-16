import { Dialog, Transition } from '@headlessui/react'
import { Slot } from '@radix-ui/react-slot'
import {
  type ForwardedRef,
  Fragment,
  type ReactNode,
  forwardRef,
  useImperativeHandle,
} from 'react'

import { type ClassNameValue, twMerge } from 'tailwind-merge'

import { Button } from '../Button'
import { Icon } from '../Icon'
import type { ModalRef } from './types/ModalRef'
import { useModal } from './useModal'

type ModalProps = {
  trigger: ReactNode
  children?: ReactNode
  title?: string
  description?: string
  hasOnlyAction?: boolean
  className?: ClassNameValue
  onAction?: VoidFunction
  onClose?: VoidFunction
}

const ModalComponent = (
  {
    children,
    trigger,
    title,
    description,
    className,
    hasOnlyAction = false,
    onAction,
    onClose,
  }: ModalProps,
  ref: ForwardedRef<ModalRef>
) => {
  const { open, close, handleActionClick, isOpen } = useModal(onAction, onClose)

  useImperativeHandle(ref, () => {
    return {
      open,
      close,
    }
  })

  return (
    <>
      <Slot onClick={open} aria-label='Close modal' aria-controls='modal'>
        {trigger}
      </Slot>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog id='modal' as='div' className='relative z-10' onClose={close}>
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
                <Dialog.Panel
                  className={twMerge(
                    'w-full min-h-[25vh] max-w-lg transform overflow-auto rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all',
                    className
                  )}
                >
                  <header className='flex items-center'>
                    {title && (
                      <Dialog.Title
                        as='h3'
                        className='flex-1 text-xl font-semibold leading-6 text-gray-900 shrink-0'
                      >
                        {title}
                      </Dialog.Title>
                    )}
                    <button
                      onClick={close}
                      type='button'
                      className='p-2 w-8 h-8 grid place-content-center'
                      aria-label='Close modal'
                    >
                      <Icon
                        value='close'
                        size={20}
                        className='text-gray-800 hover:bg-gray-100 rounded-full '
                      />
                    </button>
                  </header>
                  {children && children}
                  <Dialog.Description className='mt-6 text-lg'>
                    {description}
                  </Dialog.Description>
                  {onAction && (
                    <div className='flex items-center justify-center gap-3 w-full mt-6'>
                      <Button onClick={handleActionClick}>Confirm</Button>
                      {!hasOnlyAction && (
                        <Button onClick={close} className='bg-gray-200 text-gray-700'>
                          Cancel
                        </Button>
                      )}
                    </div>
                  )}
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
