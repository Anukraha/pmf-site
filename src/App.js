import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from './components/About';
import Contact from './components/Contact';
import FranchiseList from './components/FranchiseList';
import BuyFranchise from './components/BuyFranchise';
import SubmitFranchise from './components/SubmitFranchise';
import Franchise from './components/Franchise';
import Videos from './components/Videos';


function App() {
  return (
    <div className="App">
      <Router> 
      <Header></Header>
      <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/Home' element={<Home/>}/>
          <Route exact path='/About' element={<About/>}/>
          <Route exact path='/Franchises' element={<FranchiseList/>}/>
          <Route exact path='/Franchises1' element={<FranchiseList/>}/>
          <Route exact path='/Buy-Franchise' element={<BuyFranchise/>}/>
          <Route exact path='/Submit-Franchise' element={<SubmitFranchise/>}/>
          <Route exact path='/Videos' element={<Videos/>}/>
          <Route exact path='/Contact-Us' element={<Contact/>}/>
          <Route exact path=':id' element={<Franchise/>}/>
      </Routes>
      <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
