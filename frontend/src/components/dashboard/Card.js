import React from 'react';
import './assets/styles/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import gallery from'../dashboard/assets/images/gallery.png';


const Card = ({ icon, title, count, total, used, available }) => {
  return (
      <div className="row">
        <div className="col-md-3">
          <div className="card card-bg">
            <div className="card-body text-left text-white">
              <div className="circle-icon d-flex justify-content-center align-items-center">
                <img src={gallery} className="btn-icon" alt="Profile" />
              </div>
              <h5 className="card-title text-small mt-2">Pictures</h5>
              <p className="card-text mt-1">6455</p>
              <hr className="divider-v" />
              <div className="row">
                <div className="col-3">
                  <p className="text-white text-small">Total</p>
                  <p className="text-white text-small">12gb</p>
                </div>
                <div className="col-1 divider-h">

                </div>
                <div className="col-3">
                  <p className="text-white text-small">Used</p>
                  <p className="text-white text-small">10gb</p>
                </div>
                <div className="col-1 divider-h">

                </div>
                <div className="col-3">
                    <p className="text-white text-small">Available</p>
                    <p className="text-white text-small">2gb</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card card-bg">
            <div className="card-body text-left text-white">
              <div className="circle-icon d-flex justify-content-center align-items-center">
                <img src={gallery} className="btn-icon" alt="Images" />
              </div>
              <h5 className="card-title text-small mt-2">Pictures</h5>
              <p className="card-text mt-1">6455</p>
              <hr className="divider-v" />
              <div className="row">
                <div className="col-3">
                  <p className="text-white text-small">Total</p>
                  <p className="text-white text-small">12gb</p>
                </div>
                <div className="col-1 divider-h">

                </div>
                <div className="col-3">
                  <p className="text-white text-small">Used</p>
                  <p className="text-white text-small">10gb</p>
                </div>
                <div className="col-1 divider-h">

                </div>
                <div className="col-3">
                    <p className="text-white text-small">Available</p>
                    <p className="text-white text-small">2gb</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card card-bg">
            <div className="card-body text-left text-white">
              <div className="circle-icon d-flex justify-content-center align-items-center">
                <img src={gallery} className="btn-icon" alt="alt" />
              </div>
              <h5 className="card-title text-small mt-2">Pictures</h5>
              <p className="card-text mt-1">6455</p>
              <hr className="divider-v" />
              <div className="row">
                <div className="col-3">
                  <p className="text-white text-small">Total</p>
                  <p className="text-white text-small">12gb</p>
                </div>
                <div className="col-1 divider-h">

                </div>
                <div className="col-3">
                  <p className="text-white text-small">Used</p>
                  <p className="text-white text-small">10gb</p>
                </div>
                <div className="col-1 divider-h">

                </div>
                <div className="col-3">
                    <p className="text-white text-small">Available</p>
                    <p className="text-white text-small">2gb</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div class="col-md-2">
          <div class="card card-bg">
            <div class="card-body text-left text-white">
              <h5 class="card-title">Used Space</h5>
              <p class="card-text">62.4 %</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Card;
