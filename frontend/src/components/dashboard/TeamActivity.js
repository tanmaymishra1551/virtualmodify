import React, { useEffect, useState } from 'react';
import profile1 from '../dashboard/assets/images/profile-1.png';
import profile2 from '../dashboard/assets/images/profile-2.png';
import profile3 from '../dashboard/assets/images/profile-3.png';
import profile4 from '../dashboard/assets/images/profile-4.png';
import add from '../dashboard/assets/images/add.png';
import axios from 'axios';
import FormModal from '../dashboard/FormModal';

const TeamActivity = () => {
  const [vendors, setVendors] = useState([]);
  const [modal, setModal] = useState(false);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    axios.get('/vendors')
      .then((response) => {
        setVendors(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const toggle = () => setModal(!modal);

  const handleEdit = (vendor) => {
    setEditData(vendor);
    toggle();
  };

  const handleDelete = (id) => {
    axios.delete(`/vendors/${id}`)
      .then((response) => {
        setVendors(vendors.filter(vendor => vendor._id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="col-md-4">
      <div className="container">
        <div className="card-body">
          <div className="row justify-content-between">
            <div className="col-5">
              <h5 style={{ fontSize: 'medium' }} className="card-title mb-3">Team Activity</h5>
            </div>
            <div className="col-4 d-flex align-items-start mb-3">
              <img src={profile1} className="profile-img mr-n3" alt="" />
              <img src={profile2} className="profile-img mr-n3" alt="" />
              <img src={profile3} className="profile-img mr-n3" alt="" />
              <img src={profile4} className="profile-img mr-n3" alt="" />
              <span className="ml-2 emp-profile">+5</span>
            </div>
            <div className="col-2">
              <button className="btn btn-yellow btn-sm ml-auto" onClick={() => handleEdit(null)}>
                <img src={add} className="profile-img mr-1" alt="Add Icon" />
              </button>
            </div>
          </div>
          <div style={{ backgroundColor: '#265C4C', height: '2px' }} className="col-12"></div>
          <ul className="list-group mt-2">
            {vendors.map((vendor, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                {vendor.name}
                <span className="badge badge-success badge-pill">5</span>
                <div>
                  <button className="btn btn-primary btn-sm mr-2" onClick={() => handleEdit(vendor)}>Edit</button>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(vendor._id)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <FormModal isOpen={modal} toggle={toggle} editData={editData} setVendors={setVendors} vendors={vendors} />
    </div>
  );
};

export default TeamActivity;
