export interface IOrdersController {
  createOrder(totalCost: number): Promise<{ orderId: string; checkoutToken: string }>
  updateOrder(orderId: string, totalCost: number): Promise<void>
  handleWebhook(request: Request): Promise<void>
}
