import React from 'react'
import "./navbar.css"
import {Link} from "react-router-dom"
function navar () {
  return (
    <div>
     <div className='header'>
<ul>
  <li><Link to='/'>Home</Link></li>
  <li><Link to='/job'>Job</Link></li>
  <li><Link to='/news'>News</Link></li>
  <li><Link to='/blog'>Bolg</Link></li>
  <li><Link to='/event'>Event</Link></li>
</ul>
     </div>
      <div>
        <h1>navr</h1>
      </div>
    </div>
  )
}

export default navar
