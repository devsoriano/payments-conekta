import React from 'react';
import { useHistory } from "react-router-dom";
import { 
  moneyFormat, 
  capitalize, 
  convertUnixDate,
  convertUnixHours
} from '../../utils/utils';
import '../../assets/styles/components/payment/Payments.scss';
import PaymentStatusTag from './PaymentStatusTag';
import PaymentMethodTag from './PaymentMethodTag';

const PaymentsList = ({payments, title}) => {

  //to use history from react-router-dom
  let history = useHistory();

  return (
    <>
      <h2>{title}</h2>
      <section>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col" className="payment-date">Date</th>
              <th scope="col" className="payment-status">Payment status</th>
              <th scope="col" className="payment-type">Payment type</th>
              <th scope="col">Customer</th>
              <th scope="col" className="amount">Amount</th>
            </tr>
          </thead>
          <tbody>
            {payments && payments.map( item => (
              <tr key={item.id}>
                <th scope="row">
                  <i className="fal fa-eye search-payment" onClick={() => history.push(`/payment/${item.id}`)}></i>
                </th>
                <td className="payment-date">
                  {convertUnixDate(item.created)} <br/> {convertUnixHours(item.created)}
                </td>
                <td className="payment-status">
                    <PaymentStatusTag  status={item.status} />
                  <div>{capitalize(item.failure)}</div>
                </td>
                <td className="payment-type">
                  <span>{capitalize(item.type)}</span>
                  <span>
                    <PaymentMethodTag brand={item.brand} />
                  </span>
                </td>
                <td>
                  {item.customer.name} <br /> 
                  {item.customer.email}
                </td>
                <td className="amount">
                  {moneyFormat.format(item.amount)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default PaymentsList;