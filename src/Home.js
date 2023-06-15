import React from 'react'
import "./Home.css"
import {Link} from "react-router-dom"
function Home() {
  return (
    <div>
     <div className='header'>
<ul>
  {/* <li><Link to='/'>Home</Link></li> */}
  <li><Link to='/job'>Job</Link></li>
  <li><Link to='/news'>News</Link></li>
  <li><Link to='/event'>Event</Link></li>
</ul>
     </div>
     
    </div>
  )
}

export default Home
