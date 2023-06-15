
import './App.css';
import React from 'react'; 
import {  Routes, Route} from "react-router-dom"

import Home from './Home';
import News from './News';
import Job from './Job';
import Event from './Event';



function App() {
  return (
    <>
     <Home/>
    
     <Routes>
     
      {/* <Route path='/' element={<Home/>}/> */}
      <Route path='/job' element={<Job/>}/>
      <Route path='/news' element={<News/>}/>
   
      <Route path='/event' element={<Event/>}/>
     </Routes>
    </>
   
  );
}

export default App;
