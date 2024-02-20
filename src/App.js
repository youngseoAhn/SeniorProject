import Home from './Pages/Home';
import About from './Pages/About';
import Career from './Pages/Career';
import ERNumber from './Pages/ERNumber.js';
import Mental from './Pages/Mental';
import {Routes, Route} from 'react-router-dom';
import Donation from './Pages/Donations.js';
import ClientEnter from './Pages/ClientEnter.js'
import Submitted from './Pages/Submitted.js'
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/About' element = {<About/>}/>
      <Route path='/Career' element = {<Career/>}/>
      <Route path='/ER' element = {<ERNumber/>}/>
      <Route path='/Mental' element = {<Mental/>}/>
      <Route path='/Donation' element = {<Donation/>}/>
      <Route path='/ClientEnter' element = {<ClientEnter/>}/>
      <Route path='/Submitted' element = {<Submitted/>}/>
    </Routes>
  );
}

export default App;
