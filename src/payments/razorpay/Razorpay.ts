import {IRazorpayRequest} from './types/Index';
import RazorpayCheckout from 'react-native-razorpay';
export const razorpay = () => {
  // TODO : Change the required details
  const options: IRazorpayRequest = {
    description: 'Credits towards consultation',
    image: 'https://i.imgur.com/3g7nmJC.png',
    currency: 'INR',
    key: '', // Your api key
    amount: 5000,
    name: 'foo',
    prefill: {
      email: 'void@razorpay.com',
      contact: '9191919191',
      name: 'Razorpay Software',
    },
    theme: {color: '#F37254'},
    order_id: 'foo',
  };
  RazorpayCheckout.open(options)
    .then((data: any) => {
      // handle success
      return data;
    })
    .catch((error: any) => {
      // handle failure
      return error;
    });
};
