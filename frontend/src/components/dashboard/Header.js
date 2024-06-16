import React from 'react';
import './assets/styles/main.css';
import logo from '../dashboard/assets/images/logo.png';
import notification from '../dashboard/assets/images/notification.png';
import addyellow from '../dashboard/assets/images/add-yellow.png';
import profile1 from '../dashboard/assets/images/profile-1.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <div className="row">
      <div className="col-12 text-white py-3 d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img src={logo} className="logo mr-2" alt="logo" />
          <h1 className="title">Creative Space</h1>
        </div>
        <div className="d-flex align-items-center header-right">
          <span className="d-none d-md-inline">Maksym K.</span>
          <img src={profile1} className="nav-img rounded-circle ml-2 mr-2" alt="profile" />
          <button className="btn btn-sm ml-2 notification-btn">
            <img src={notification} className="btn-icon" alt="notification" />
          </button>
          <button className="btn btn-sm ml-2 text-white rounded-pill">
            <img src={addyellow} className="btn-icon mr-1" alt="add" />
            Join
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
