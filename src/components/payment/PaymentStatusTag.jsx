import React from 'react';
import { 
  capitalize 
} from '../../utils/utils';
import '../../assets/styles/components/payment/PaymentStatusTag.scss';

const PaymentStatusTag = ({status}) => {

  return (
    <>
      <div className={
        status === 'declined' ? 
          'item-declined': status === 'refunded' || status === 'partially_refunded' ? 
          'item-refunded' : status === 'paid' ?
          'item-success' : 'item-other-status'
      }>
        {status === 'refunded' ? 'Total Refund' : capitalize(status)}
        {
          capitalize(status) === 'Refunded' ? 
            <i className="far fa-undo-alt icon-item"></i> : 
            <i className="fal fa-exclamation-circle icon-item"></i>
        }
      </div> 
    </>
  );
}

export default PaymentStatusTag;