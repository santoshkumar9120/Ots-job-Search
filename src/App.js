
import './App.css';
import React from 'react'; 
import { Link, Routes, Route} from "react-router-dom"

import Home from './Home';
import News from './News';
import Job from './Job';
import Event from './Event';
import Path from './Path'

function App() {
  return (
    <>
  
     
    
     <Routes>
     
      <Route path='/' element={<Path/>}/>
      
      <Route path='/news' element={<News/>}/>
      <Route path='/job' element={<Job/>}/>
      <Route path='/event' element={<Event/>}/>
     </Routes>
    </>
   
  );
}

export default App;
