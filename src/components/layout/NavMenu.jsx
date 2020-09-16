import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import '../../assets/styles/components/layout/NavMenu.scss';
import logo from '../../assets/static/logo.svg';

const NavMenu = () => {

  //to use history from react-router-dom
  let history = useHistory();

  return (
    <nav id="sidebar">
      <div className="sidebar-header">
        <img className='logo' src={logo} alt='Logo' />
      </div>
      <ul className="list-unstyled components">
        <li>
          <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
          <a data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
            <i className="fad fa-th-large custom-icon"></i>
            General
          </a>
        </li>
        <li>
          <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
            <i className="fad fa-exchange-alt custom-icon"></i>
            Transactions
          </a>
          <ul className="collapse list-unstyled" id="homeSubmenu">
            <li>
              <a onClick={() => history.push('/')}>Payments</a>
            </li>
            <li>
              <a>Transfers</a>
            </li>
            <li>
              <a>Chargebacks</a>
            </li>
          </ul>
        </li>
        <li>
          <a data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
            <i className="fas fa-calculator-alt custom-icon"></i>
            Accounting
          </a>
        </li>
        <li>
          <a data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
            <i className="fad fa-code custom-icon"></i>
            Developers
          </a>
        </li>
      </ul>
    </nav>
  );
}


const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu);