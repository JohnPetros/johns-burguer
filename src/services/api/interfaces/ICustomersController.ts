import type { Customer } from '../../../@types/Customer'

export interface ICustomersController {
  getCustomerById(id: string): Promise<Customer | null>
  getCustomerByEmail(email: string): Promise<Customer | null>
  createCustomer(customer: Omit<Customer, 'id'>): Promise<string>
  updateCustomer(customer: Customer): Promise<void>
}
