import React from 'react';
import database from '../dashboard/assets/images/database.png';

const MainContent = () => {
  return (
    <div className="col-12">
      <div className="container">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="card-title">Revenue</h5>
            <button className="btn btn-light btn-sm"><img src={database} className="btn-icon mr-1" alt='alternate'/></button>
          </div>
          <div style={{backgroundColor:'#265C4C', height:'2px'}} className="col-12"></div>
          <div className="progress mb-3 mt-2">
            <div className="progress-bar bg-dark" role="progressbar" style={{width: '35%'}} aria-valuenow="35"
                    aria-valuemin="0" aria-valuemax="100"></div>
            <div className="progress-bar bg-dark" role="progressbar" style={{width: '20%'}} aria-valuenow="20"
                    aria-valuemin="0" aria-valuemax="100"></div>
            <div className="progress-bar bg-dark" role="progressbar" style={{width: '15%'}} aria-valuenow="15"
                    aria-valuemin="0" aria-valuemax="100"></div>
            <div className="progress-bar bg-dark" role="progressbar" style={{width: '10%'}} aria-valuenow="10"
                    aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <p className="mb-0">57,2trb</p>
          <span className="badge badge-success">31trb</span>
          <span className="badge badge-warning">36trb</span>
          <span className="badge badge-danger">27trb</span>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
