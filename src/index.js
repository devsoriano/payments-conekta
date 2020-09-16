import React from 'react';
import ReactDOM from 'react-dom';
import  { Provider } from 'react-redux';
import  { createStore, compose } from 'redux';
import reducer from './reducers';
import App from './routes/App';

const initialState = {
  "details": {},
  "payments": [
    {
      "id": "ord_2m9fvZfVz97nQhMmg",
      "created": 1565800520,
      "status": "declined",
      "amount": 10000,
      "currency": "MXN",
      "brand": "visa",
      "balance": 10000,
      "type": "credit",
      "failure": "insufficient_funds",
      "customer": {
        "name": "Juan Lopez",
        "email": "jorge@gmail.com"
      }
    },
    {
      "id": "ord_2m9fvXNykAf78Sbh1",
      "created": 1565800517,
      "status": "declined",
      "amount": 10000,
      "currency": "MXN",
      "brand": "visa",
      "balance": 10000,
      "type": "credit",
      "failure": "card_declined",
      "customer": {
        "name": "Sam Jones",
        "email": "Jones@gmail.com"
      }
    },
    {
      "id": "ord_2m9N4myLtYHC5coAV",
      "created": 1565719146,
      "status": "refunded",
      "amount": 10000,
      "currency": "MXN",
      "brand": "visa",
      "balance": 0,
      "type": "credit",
      "failure": null,
      "customer": {
        "name": "Omar Onofre",
        "email": "omar@hotmail.com"
      }
    },
    {
      "id": "ord_2m9N4iHFHYZxtWQS7",
      "created": 1565719141,
      "status": "no_charge",
      "amount": 92844,
      "currency": "MXN",
      "brand": null,
      "balance": 92844,
      "type": null,
      "failure": null,
      "customer": {
        "name": "Mau Arce",
        "email": "mau@conekta.com"
      }
    },
    {
      "id": "ord_2m9N4fKyCkDWzBNwv",
      "created": 1565719137,
      "status": "refunded",
      "amount": 94851,
      "currency": "MXN",
      "brand": "american_express",
      "balance": 0,
      "type": "credit",
      "failure": null,
      "customer": {
        "name": "Carol Avila",
        "email": "carol@conekta.com"
      }
    },
    {
      "id": "ord_2m9N3G7qvpMvMzhbC",
      "created": 1565719027,
      "status": "refunded",
      "amount": 94851,
      "currency": "MXN",
      "brand": "american_express",
      "balance": 0,
      "type": "credit",
      "failure": null,
      "customer": {
        "name": "Carol Avila",
        "email": "carol@conekta.com"
      }
    },
    {
      "id": "ord_2m9N3Eknbt6rjaahS",
      "created": 1565719025,
      "status": "refunded",
      "amount": 94851,
      "currency": "MXN",
      "brand": "american_express",
      "balance": 0,
      "type": "credit",
      "failure": null,
      "customer": {
        "name": "Carol Avila",
        "email": "carol@conekta.com"
      }
    },
    {
      "id": "ord_2m9ML1b4oXWi6ogPm",
      "created": 1565715786,
      "status": "partially_refunded",
      "amount": 10000,
      "currency": "MXN",
      "brand": "american_express",
      "balance": 8600,
      "type": "credit",
      "failure": null,
      "customer": {
        "name": "Fernando Ruiz",
        "email": "fer_ruiz@hotmail.com"
      } 
    },
    {
      "id": "ord_2m9MKz7Rm8YtrCUTg",
      "created": 1565715784,
      "status": "partially_refunded",
      "amount": 10000,
      "currency": "MXN",
      "brand": "american_express",
      "balance": 9500,
      "type": "credit",
      "failure": null,
      "customer": {
        "name": "Fernando Ruiz",
        "email": "fer_ruiz@hotmail.com"
      }
    },
    {
      "id": "ord_2m8SdmJvwApj5wLQC",
      "created": 1565475679,
      "status": "partially_refunded",
      "amount": 13120,
      "currency": "MXN",
      "brand": "visa",
      "balance": 10000,
      "type": "credit",
      "failure": null,
      "customer": {
        "name": "Jocelyn Perez",
        "email": "joss@conekta.com"
      }
    },
    {
      "id": "ord_2m8SWCKxwcm8eHHbN",
      "created": 1565475085,
      "status": "paid",
      "amount": 13120,
      "currency": "MXN",
      "brand": "visa",
      "balance": 13120,
      "type": "credit",
      "failure": null,
      "customer": {
        "name": "Jocelyn Perez",
        "email": "joss@conekta.com"
      }
    },
    {
      "id": "ord_2m8SUvDW4cbsUF7r5",
      "created": 1565474984,
      "status": "no_charge",
      "amount": 13120,
      "currency": "MXN",
      "brand": null,
      "balance": 13120,
      "type": null,
      "failure": null,
      "customer": {
        "name": "Jocelyn Perez",
        "email": "joss@conekta.com"
      }
    },
      {
      "id": "ord_2m8SFUA1WxUa7pUhd",
      "created": 1565473928,
      "status": "no_charge",
      "amount": 13120,
      "currency": "MXN",
      "brand": null,
      "balance": 13120,
      "type": null,
      "failure": null,
      "customer": {
        "name": "Jocelyn Perez",
        "email": "joss@conekta.com"
      }
    },
      {
      "id": "ord_2m87xGnbjCnU9DMQY",
      "created": 1565390557,
      "status": "paid",
      "amount": 13120,
      "currency": "MXN",
      "brand": "visa",
      "balance": 13120,
      "type": "credit",
      "failure": null,
      "customer": {
        "name": "Jocelyn Perez",
        "email": "joss@conekta.com"
      }
    },
    {
      "id": "ord_2m7pGXrqwVtKGuWQY",
      "created": 1565309972,
      "status": "partially_refunded",
      "amount": 51000,
      "currency": "MXN",
      "brand": "visa",
      "balance": 50900,
      "type": "credit",
      "failure": null,
      "customer": {
        "name": "Jose Jose",
        "email": "lews.therin@gmail.com"
      }
    },
    {
      "id": "ord_2m7p69rKpJcZB9VYD",
      "created": 1565309157,
      "status": "paid",
      "amount": 51000,
      "currency": "MXN",
      "brand": "visa",
      "balance": 51000,
      "type": "credit",
      "failure": null,
      "customer": {
        "name": "Lews Therin",
        "email": "lews.therin@gmail.com"
      }
    },
    {
      "id": "ord_2m7m8YABH3LYaKRVp",
      "created": 1565295674,
      "status": "declined",
      "amount": 13120,
      "currency": "MXN",
      "brand": "visa",
      "balance": 13120,
      "type": "credit",
      "failure": "insufficient_funds",
      "customer": {
        "name": "Jocelyn Perez",
        "email": "joss@conekta.com"
      }
    },
    {
      "id": "ord_2m7kzucdcug6Y6pFU",
      "created": 1565295075,
      "status": "no_charge",
      "amount": 13120,
      "currency": "MXN",
      "brand": null,
      "balance": 13120,
      "type": null,
      "failure": null,
      "customer": {
        "name": "Jocelyn Perez",
        "email": "joss@conekta.com"
      }
    },
    {
      "id": "ord_2m7kydnhYyPE16TFb",
      "created": 1565294975,
      "status": "no_charge",
      "amount": 13120,
      "currency": "MXN",
      "brand": null,
      "balance": 13120,
      "type": null,
      "failure": null,
      "customer": {
        "name": "Jocelyn Perez",
        "email": "joss@conekta.com"
      }
    },
    {
      "id": "ord_2m7kkCWGVAS46MmfB",
      "created": 1565293919,
      "status": "no_charge",
      "amount": 13120,
      "currency": "MXN",
      "brand": null,
      "balance": 13120,
      "type": null,
      "failure": null,
      "customer": {
      "name": "Jocelyn Perez",
      "email": "joss@conekta.com"
      }
    }
  ], 
  "payments_details": [
    {
      "id": 'ord_2m9fvZfVz97nQhMmg',
      "paid_at": null,
      "livemode": "false",
      "amount": 10000,
      "balance": 10000,
      "brand": "visa",
      "status": "declined",
      "failure": "insufficient_funds",
      "type": "credit",
      "currency": "MXN",
      "created": 1565800520,
      "updated": 1565800520,
      "description": null,
      "customer": {
        "id": null,
        "name": "Juan Lopez",
        "email": "jorge@gmail.com",
        "phone": "3302646833",
        "payment_sources": null
      },
      "nested_charges": [
        {
          "id": "5d54384882c2724944bdf346",
          "description": "Payment from order",
          "reference_id": null,
          "status": "declined",
          "amount": 10000,
          "created": 1565800520,
          "fee": 626,
          "payment_method": {
            "auth_code": "831527",
            "bank": "BBVA BANCOMER, S.A.",
            "brand": "visa",
            "clabe": null,
            "description": "PAGO MUEBLES DEPTO MUESTRA MANILK",
            "exp_month": "12",
            "exp_year": "19",
            "expires_at": null,
            "issuing_account_bank": "40012",
            "issuing_account_holder_name": "HIRJAV SA DE CV",
            "issuing_account_number": "012180001054032274",
            "issuing_account_tax_id": "HIR1602169C8",
            "last4": "0127",
            "name": "Jorge Lopez",
            "reference": null,
            "reference_number": "70619",
            "tracking_code": "BNET01001906070001501285",
            "type": "credit"
          },
          "failure": "insufficient_funds",
          "failure_message": "Esta tarjeta no tiene suficientes fondos para completar la compra.",
          "device_fingerprint": "123456789abcdefghijkmnopqrstuv"
        }
      ],
      "line_items": [
        {
          "name": "Box of Cohiba S1s",
          "unit_price": 10000,
          "quantity": 1,
          "metadata": []
        }
      ]
    }
  ]
}

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhacers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('app'));