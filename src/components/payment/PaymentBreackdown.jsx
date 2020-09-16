import React from 'react';
import { 
  moneyFormat, 
  getSumTotal, 
  getSubTotal, 
  getFee 
} from '../../utils/utils';
import '../../assets/styles/components/payment/PaymentBreackdown.scss';

const PaymentBreackdown = ({line_items}) => {

  //Actions to get results 
  const sumTotal = getSumTotal(line_items);
  const subtotal = getSubTotal(sumTotal);
  const fee = getFee(sumTotal);

  return (
    <>
      <div className="container card-payment">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col" className="invisible-custom">SKU</th>
              <th scope="col" className="invisible-custom">Quantity</th>
              <th scope="col" className="invisible-custom">Articles</th>
              <th scope="col" className="invisible-custom">Taxes</th>
              <th scope="col" className="invisible-custom">Shipping</th>
              <th scope="col" className="invisible-custom">Discounts</th>
              <th scope="col">Unit price</th>
            </tr>
          </thead>
          <tbody>
            {line_items.map( (item, i) => (
              <tr key={i}>
                <td className="invisible-custom"></td>
                <td className="invisible-custom">{item.quantity}</td>
                <td className="invisible-custom">{item.name}</td>
                <td className="invisible-custom"></td>
                <td className="invisible-custom"></td>
                <td className="invisible-custom"></td>
                <td >
                  <div className="optional"> {item.quantity} </div>  
                  <div className="optional"> {item.name} </div>  
                  {moneyFormat.format(item.unit_price)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="results">
          <div>
            <span className="name-tag subtotal-tag invisible-custom">Subtotal:</span>
            <span>
              <div className="optional">Subtotal:</div>
              {moneyFormat.format(subtotal)}
              </span>
          </div>
          <div>
            <span className="name-tag fee-tag invisible-custom">Fee:</span>
            <span>
              <div className="optional">Fee:</div>
              {moneyFormat.format(fee)}
            </span>
          </div>
          <div>
            <span className="name-tag total-tag invisible-custom">Total:</span>
            <span>
              <div className="optional">Total:</div>
              {moneyFormat.format(sumTotal)}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentBreackdown;