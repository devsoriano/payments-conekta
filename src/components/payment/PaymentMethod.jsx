import React from 'react';
import PaymentMethodTag from './PaymentMethodTag';
import '../../assets/styles/components/payment/PaymentMethod.scss'

const PaymentMethod = ({ paymentMethod }) => {
  return (
    <>
      <div className="container card-payment blue">
        <div className="row white">
          <div className="col-md-12 title-card-payment">
            PAYMENT METHOD
          </div>
        </div>
        <div className="row row-bank-brand white">
          <div className="col-md-12 col-lg-8 col-bank">
            {paymentMethod.bank}
          </div>
          <div className="col-md-12 col-lg-4 col-brand">
            <PaymentMethodTag brand={paymentMethod.brand}/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-12 col-last4">
           **** **** **** {paymentMethod.last4}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-12 col-name">
            {paymentMethod.name}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-12 col-ed-auth">
            Expiration date: {paymentMethod.exp_month} {paymentMethod.exp_year}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-12 col-ed-auth">
            Autorization code: {paymentMethod.auth_code}
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentMethod;