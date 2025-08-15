export interface IRazorpayRequest {
  description: string;
  image: string;
  currency: string;
  key: string;
  amount: number;
  name: string;
  prefill: Prefill;
  theme: Theme;
  order_id: string;
}

export interface Prefill {
  email: string;
  contact: string;
  name: string;
}

export interface Theme {
  color: string;
}
