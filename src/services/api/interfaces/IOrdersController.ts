import type { ProcessedOrder } from "../../../@types/ProcessedOrder"

export interface IOrdersController {
  createOrder(totalCost: number): Promise<{ orderId: string; checkoutToken: string }>
  updateOrder(orderId: string, totalCost: number): Promise<void>
  handleWebhook(request: Request): Promise<ProcessedOrder | null>
}
