import type { APIRoute } from 'astro'

import { Api } from '../../services/api'

export const POST: APIRoute = async ({ request }) => {
  await Api().handleWebhook(request)

  return new Response(JSON.stringify({}))
}
