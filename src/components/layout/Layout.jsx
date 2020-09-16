import React from 'react';
import NavMenu from './NavMenu';
import Footer from './Footer';
import my from '../../assets/static/my.jpg'

const Layout = ({children}) => (
  <>
    <NavMenu />
    <div id="content">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <button type="button" id="sidebarCollapse" className="navbar-btn">
            <i className="fas fa-align-justify burger"></i>
          </button>
          <div className="profile-content">
            <div className='profile-content-photo'>
              <img src={my} alt="profile" />
              <div className="little-description-user">
                <div>User name:</div>
                <div>Rafael Soriano Ramírez</div>
              </div>
            </div>
            <ul className="ul-profile-content">
              <li className="li-profile-content">
                <a>Profile</a>
              </li>
              <li className="li-profile-content">
                <a>Close session</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {children}
    </div>
    <Footer />
  </>
);

export default Layout;
