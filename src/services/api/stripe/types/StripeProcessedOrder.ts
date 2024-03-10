type ProcessedOrder = {
  id: string
  object: string
  amount: number
  amount_capturable: number
  amount_details: {
     tip: Record<string, unknown>
  }
  amount_received: number
  application: null | string
  application_fee_amount: null | number
  automatic_payment_methods: {
     allow_redirects: string
     enabled: boolean
  }
  canceled_at: null | number
  cancellation_reason: null | string
  capture_method: string
  client_secret: string
  confirmation_method: string
  created: number
  currency: string
  customer: null | string
  description: null | string
  invoice: null | string
  last_payment_error: null | string
  latest_charge: string
  livemode: boolean
  metadata: Record<string, unknown>
  next_action: null | string
  on_behalf_of: null | string
  payment_method: string
  payment_method_configuration_details: {
     id: string
     parent: null | string
  }
  payment_method_options: {
     card: {
       installments: null | string
       mandate_options: null | string
       network: null | string
       request_three_d_secure: string
     }
  }
  payment_method_types: string[]
  processing: null | string
  receipt_email: string
  review: null | string
  setup_future_usage: null | string
  shipping: {
     address: {
       city: string
       country: string
       line1: string
       line2: string
       postal_code: string
       state: string
     }
     carrier: null | string
     name: string
     phone: string
     tracking_number: null | string
  }
  source: null | string
  statement_descriptor: null | string
  statement_descriptor_suffix: null | string
  status: string
  transfer_data: null | string
  transfer_group: null | string
 }
 