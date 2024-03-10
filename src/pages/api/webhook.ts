import { type APIRoute } from 'astro'

import { Api } from '../../services/api'

export const POST: APIRoute = async ({ request, cookies }) => {
  const api = Api()

  const processedOrder = await api.handleWebhook(request)

  if (!processedOrder)
    return new Response(JSON.stringify({ message: 'Processed order not found' }), {
      status: 500,
    })

  const customer = processedOrder?.customer.email
    ? await api.getCustomerByEmail(processedOrder?.customer.email)
    : null

  if (!customer) {
    const customerId = await api.createCustomer(processedOrder.customer)

    console.log({ customerId })

    cookies.set('customer-id', customerId)
  } else {
    await api.updateCustomer({ ...customer, ...processedOrder.customer })
    console.log({ customer })
    cookies.set('customer-id', customer.id)
  }

  return new Response(JSON.stringify({ status: 'ok' }))
}
