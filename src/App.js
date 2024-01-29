import Home from './Pages/Home';
import About from './Pages/About';
import Career from './Pages/Career';
import ERNumber from './Pages/ERNumber.js';
import Mental from './Pages/Mental';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/About' element = {<About/>}/>
      <Route path='/Career' element = {<Career/>}/>
      <Route path='/ER' element = {<ERNumber/>}/>
      <Route path='/Mental' element = {<Mental/>}/>
    </Routes>
  );
}

export default App;
