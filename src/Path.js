import React from 'react'
import './App.css';
import News from './News';
import {Link} from 'react-router-dom';
function Path() {
  return (
    <>
    
    
    
    
     <div className="mainheader">
      <Link to='/news'>
      <p className="paraLink"style={{textDecoration:'none'}}>News</p>
      </Link>
      <Link to='/job'>
       <p className="paraLink"style={{textDecoration:'none'}}>Job</p>
       </Link>
       <Link to='/event'style={{textDecoration:'none'}}>
       <p className="paraLink">Event</p>
       </Link>
 
    </div>
   <News/>
   
   </>
    
  )
}

export default Path
