import React from 'react';
import PaymentAttemps from './PaymentAttemps';
import '../../assets/styles/components/payment/PaymentOthers.scss';

const PaymentOthers = ({
  created, 
  status, 
  amount, 
  brand, 
  type
}) => {

  return (
    <>
      <div className="container card-payment other">
        <div className="row">
          <div className="col-md-12">
            <section>
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <a className="nav-link active" id="pa-tab" data-toggle="tab" href="#pa" role="tab" aria-controls="data" aria-selected="true">Payment attemps</a>
                </li>
                <li className="nav-item" role="refunds">
                  <a className="nav-link">Refunds</a>
                </li>
                <li className="nav-item" role="notifications">
                  <a className="nav-link">Notifications</a>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="pa" role="tabpanel" aria-labelledby="data-tab">
                  <PaymentAttemps 
                    created={created}
                    status={status}
                    amount={amount}
                    brand={brand}
                    type={type}
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentOthers;