import React from 'react';
import { 
  moneyFormat,
  convertUnixDate,
  convertUnixHours,
  capitalize
} from '../../utils/utils';
import PaymentStatusTag from './PaymentStatusTag';
import '../../assets/styles/components/payment/PaymentStatus.scss';

const PaymentStatus = ({
  amount, 
  created,
  paitAt,
  status,
  failure, 
  id
}) => {

  return (
    <>
      <div className="container card-payment">
        <div className="row">
          <div className="col-md-12 title-card-payment">
            PAYMENT STATUS
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-6">
            <div className="common-text">Amount</div>
            <div className="amount-number">{moneyFormat.format(amount)}</div>
          </div>
          <div className="col-md-12 col-lg-6" className="payment-subcontent">
            <div className="common-text">Created at: {`${convertUnixDate(created)} ${convertUnixHours(created)}`}</div>
            <div className="common-text grey">Pait at: {paitAt === null ? 'no pait at' : paitAt }</div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 content-status-tag">
            <PaymentStatusTag  status={status} />
            <div className="common-text failure">{capitalize(failure)}</div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-8">
            <div className="common-text">Order ID:</div>
            <div className="common-text"><b>{id}</b></div>
          </div>
          <div className="col-md-12 col-lg-4">
            <a className="a-ref-vt">View Transfer</a> <br/>
            <a className="a-ref-cb">View Chargeback</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentStatus;