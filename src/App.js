import './App.css';
import Home from './components/Home';
import Team from './components/Team';
import Theme from './components/Theme';
import Events from './components/Events';
import ContactUs from './components/ContactUs';
import Pricing from './components/Pricing';
import Tshirts from './components/Tshirts';

import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom"; 


function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='team' element={<Team/>}/>
        <Route path='/events' element={<Events/>}/>
        <Route path='/ContactUs' element={<ContactUs/>}/>
        <Route path='/theme' element={<Theme/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/tshirt' element={<Tshirts/>}/>
        <Route path='*' element={<ContactUs/>}/>

      </Routes>
    </Router>
    </div>
  );
}

export default App;
