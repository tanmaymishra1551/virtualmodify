import './App.css';
import Header from './components/dashboard/Header.js';
import Sidebar from './components/dashboard/Sidebar.js';
import Card from './components/dashboard/Card.js';

function App() {

  return (
    <div>
       <div style={{ backgroundColor: '#265C4C' }} className="col-12">
          <Header />
          <div className="row" style={{height: "50vh"}}>
            <Sidebar />
          <div className="col-md-10">
            <Card />
          </div>
          </div>
        </div>
    </div>
  );
}

export default App;
