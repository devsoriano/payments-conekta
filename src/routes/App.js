import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from '../containers/NotFound';
import Layout from '../components/layout/Layout';
import Payments from '../containers/Payments';
import PaymentDetail from '../components/payment/PaymentDetail';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Payments}/>
        <Route exact path="/payment/:id" component={PaymentDetail}/>
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;