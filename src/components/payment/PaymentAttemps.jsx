import React from 'react';
import { 
  moneyFormat, 
  capitalize, 
  convertUnixDate,
  convertUnixHours
} from '../../utils/utils';
import PaymentStatusTag from './PaymentStatusTag';
import PaymentMethodTag from './PaymentMethodTag';
import '../../assets/styles/components/payment/PaymentAttemps.scss';

const PaymentAttemps = ({
  created, 
  status, 
  amount, 
  brand, 
  type
}) => {

  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col" className="payment-date">Date</th>
            <th scope="col" className="payment-status">Status</th>
            <th scope="col" className="payment-type">Payment method</th>
            <th scope="col" className="amount">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="payment-date">
              {convertUnixDate(created)} <br/> {convertUnixHours(created)}
            </td>
            <td className="payment-status">
              <PaymentStatusTag  status={status} />
            </td>
            <td className="payment-type">
              <span>{capitalize(type)}</span>
              <span className="brand">
                <PaymentMethodTag brand={brand} />
              </span>
            </td>
            <td className="amount">
              {moneyFormat.format(amount)}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="status">
        <h3>Status</h3>
        <div className="content-min">
          <PaymentStatusTag  status={status} />
          <div>{moneyFormat.format(amount)}</div>
        </div> 
      </div>
    </>
  );
}

export default PaymentAttemps;