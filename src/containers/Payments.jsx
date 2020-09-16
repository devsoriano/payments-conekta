import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/App.scss';
import PaymentsList from '../components/payment/PaymentsList';

const Payments = ({payments}) => {
  return (
    <>
      <PaymentsList 
        title={'Payments'}
        payments={payments}
      />  
    </>
  );
}

const mapStateToProps = state => {
  return {
    payments: state.payments
  };
};

export default connect(mapStateToProps, null)(Payments);
