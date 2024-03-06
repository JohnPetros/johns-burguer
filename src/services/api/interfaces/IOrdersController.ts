import type { Order } from "../../../@types/Order"

export interface IOrdersController {
  createOrder(order: Order): Promise<{ orderId: string; checkoutToken: string }>
}