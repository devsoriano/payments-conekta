import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getPaymentDetails } from '../../actions';
import PaymentStatus from './PaymentStatus';
import PaymentClient from './PaymentClient';
import PaymentMethod from './PaymentMethod';
import PaymentOthers from './PaymentOthers';
import PaymentBreackdown from './PaymentBreackdown';
import '../../assets/styles/components/payment/PaymentDetail.scss';

const PaymentDetail = props => {

  const { id } = props.match.params;
  const [loading, setLoading] = useState(true);
  const hasDetails = Object.keys(props.details).length > 0;

  //Use id of payment to search details payment and return data or not
  useEffect(() => {
    props.getPaymentDetails(id);
    setLoading(false);
  }, []);


  if (loading) {
    return <h2>Cargando...</h2>;
  }

  return hasDetails ? (
    <>
      <h2>Payment details</h2>
      <section>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <a className="nav-link active" id="data-tab" data-toggle="tab" href="#data" role="tab" aria-controls="data" aria-selected="true">Data</a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link" id="breakdown-tab" data-toggle="tab" href="#breakdown" role="tab" aria-controls="breakdown" aria-selected="false">Breakdown</a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id="data" role="tabpanel" aria-labelledby="data-tab">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-lg-6 col-card-payment">
                  <PaymentStatus 
                    amount={props.details.amount}
                    created={props.details.created}
                    paitAt={props.details.paid_at}
                    status={props.details.status}
                    failure={props.details.failure}
                    id={props.details.id}
                  />
                </div>
                <div className="col-md-12 col-lg-3 col-card-payment">
                  <PaymentClient customer={props.details.customer}/>
                </div>
                <div className="col-md-12 col-lg-3 col-card-payment">
                  <PaymentMethod 
                    paymentMethod={props.details.nested_charges[0].payment_method}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-lg-9 col-card-payment">
                  <PaymentOthers 
                    created={props.details.created}
                    status={props.details.status}
                    amount={props.details.amount}
                    brand={props.details.brand}
                    type={props.details.type}
                  />
                </div>  
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="breakdown" role="tabpanel" aria-labelledby="breakdown-tab">
            <div className="row">
              <div className=" col-md-12 col-lg-12 col-card-payment">
                <PaymentBreackdown line_items={props.details.line_items} />
              </div> 
            </div>
          </div>
        </div>
      </section>
    </>
  ) : <Redirect to="/404/"/>;
}

//details content info by Payment selected
const mapStateToProps = state => {
  return {
    details: state.details,
  }
}

const matchDispatchToProps = {
  getPaymentDetails,
}

export default connect(mapStateToProps, matchDispatchToProps)(PaymentDetail);