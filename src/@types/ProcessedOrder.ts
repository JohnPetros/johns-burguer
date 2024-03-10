import type { Customer } from './Customer'

export type ProcessedOrder = {
  status: 'paid' | 'wainting' | 'cancel'
  customer: Omit<Customer, 'id'>
  totalPaid: number
}
