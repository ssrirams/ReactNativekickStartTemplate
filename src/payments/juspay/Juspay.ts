import HyperSdkReact from 'hyper-sdk-react';
import uuid from 'react-native-uuid';
import {
  IJuspayProcessPayload,
  IJuspayResponse,
} from './types/JuspayRequestAndResponseTypes';

export const initializeJuspay = () => {
  HyperSdkReact.createHyperServices();
  const initiate_payload = {
    requestId: uuid.v4(),
    service: 'in.juspay.hyperpay',
    payload: {
      action: 'initiate',
      merchantId: '<MERCHANT_ID>',
      clientId: '<CLIENT_ID>',
      environment: 'production',
    },
  };
  HyperSdkReact.initiate(JSON.stringify(initiate_payload));
};

export const startPayment = (processPayload: IJuspayProcessPayload) => {
  HyperSdkReact.process(JSON.stringify(processPayload));
};

export const handleJuspayResponse = (resp: IJuspayResponse) => {
  const data = JSON.parse(JSON.stringify(resp));
  const event = data.event || '';
  switch (event) {
    case 'initiate_result':
      // Juspay Payment gateway has opened
      break;
    case 'hide_loader':
      //TODO : Hide Loader
      break;

    case 'process_result':
      const error = data.error || false;
      const innerPayload = data.payload || {};
      const status = innerPayload.status || '';

      if (!error) {
        // TODO : Handle success
      } else {
        switch (status) {
          case 'backpressed':
            // user back-pressed from PP without initiating any txn
            break;
          case 'user_aborted':
            // user initiated a txn and pressed back
            // poll order status
            break;
          case 'pending_vbv':
          case 'authorizing':
            // txn in pending state
            // poll order status until backend says fail or success
            break;
          case 'authorization_failed':
          case 'authentication_failed':
          case 'api_failure':
            // txn failed
            // poll orderStatus to verify (false negatives)

            break;
          case 'new':
            // order created but txn failed
            // very rare for V2 (signature based)
            // also failure
            // poll order status
            break;
          default:
          // unknown status, this is also failure
          // poll order status
        }
        // if txn was attempted, pi and pig would be non-empty
        // can be used to show in UI if you are into that
        // errorMessage can also be shown in UI
      }
      break;

    //block:end:handle-process-result
    default:
      console.log(data);
  }
};
