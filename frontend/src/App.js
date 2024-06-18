import './App.css';
import Header from './components/dashboard/Header.js';
import Sidebar from './components/dashboard/Sidebar.js';
import Card from './components/dashboard/Card.js';
import TeamActivity from './components/dashboard/TeamActivity.js';
import MainContent from './components/dashboard/MainContent.js';
import FormModal from './components/dashboard/FormModal.js';

function App() {

  return (
    <div>
    <div style={{ backgroundColor: '#265C4C' }} className="col-12">
      <Header />
      <div className="row" style={{height: "50vh"}}>
        <Sidebar/>
      <div className="col-md-10">
        <Card />
      </div>
      </div>
    </div>
    <div className="col-12 mt-3">
      <div className="row m-6">
        <TeamActivity />
      <div class="col-md-8">
        <div class="row">
          <MainContent />
        </div>
      </div> 
      </div>
    </div>
    <FormModal />
    </div>
  );
}

export default App;
