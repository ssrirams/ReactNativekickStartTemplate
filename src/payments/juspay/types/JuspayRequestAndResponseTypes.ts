export interface IJuspayProcessPayload {
  requestId: string;
  service: string;
  payload: Payload;
}

export interface Payload {
  clientId: string;
  amount: string;
  merchantId: string;
  clientAuthToken: string;
  clientAuthTokenExpiry: Date;
  environment: string;
  action: string;
  customerId: string;
  currency: string;
  customerPhone: string;
  customerEmail: string;
  orderId: string;
}
export interface IJuspayResponse {
  event: string;
  error: boolean;
  payload: Payload;
}

export interface Payload {
  status: string;
  paymentInstrument: string;
  paymentInstrumentGroup: string;
}
