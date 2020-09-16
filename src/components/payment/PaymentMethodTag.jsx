import React from 'react';
import visa from '../../assets/static/visa.png';
import amex from '../../assets/static/amex.png';
import { capitalize } from '../../utils/utils';

const PaymentMethodTag = ({brand}) => {

  return (
    <>
      { 
        brand === 'visa' ? <img className='img-visa' src={visa} alt='Visa' /> : 
        brand === 'american_express' ? <img className='img-amex' src={amex} alt='Amex' /> :
        capitalize(brand) }
    </>
  );
}

export default PaymentMethodTag;