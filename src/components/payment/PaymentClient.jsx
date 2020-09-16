import React from 'react';
import '../../assets/styles/components/payment/PaymentClient.scss';

const PaymentClient = ({customer}) => {

  return (
    <>
      <div className="container card-payment">
        <div className="row">
          <div className="col-md-12 title-card-payment">
            CLIENT
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <div className="common-text">
                    <i className="far fa-user icon-client"></i> 
                    Name:
                  </div>
                  <div className="common-text">{customer.name}</div>
                </li>
                <li className="list-group-item">
                  <div className="common-text">
                    <i className="far fa-envelope icon-client"></i> 
                    Email:
                  </div>
                  <div className="common-text">{customer.email}</div>
                </li>
                <li className="list-group-item">
                  <div className="common-text">
                    <i className="far fa-phone-volume icon-client"></i> 
                    Phone:
                  </div>
                  <div className="common-text">{customer.phone}</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentClient;