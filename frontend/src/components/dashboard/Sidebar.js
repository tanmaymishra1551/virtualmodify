import React from 'react';


const Sidebar = () => {
  return (
    <div class="col-md-2 sidebar" style={{maxHeight: '50vh', overflowY: 'auto', paddingLeft:'25px'}}>
      <h5><a className="active-link" href="Dashboard">Dashboard</a></h5>
      <h5><a className="muted-link" href="Storage">Storage</a></h5>
      <h5><a className="muted-link" href="Collection">Collection</a></h5>
      <h5><a className="muted-link" href="Collaboration">Collaboration</a></h5>
      <h5><a className="muted-link" href="Settings">Settings</a></h5>
    </div>
  );
};

export default Sidebar;
