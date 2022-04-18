import React from 'react';
import './Nvbr.css';

const Nvbr = () => {
  return (
    <div className='nav'>
    <h2><a href="#" className="logo">api</a></h2>
    
     <ul>
       <li><a href="/" className="active">homme</a></li>
       <li><a href="/userlist">userlist</a></li>
       <li><a href="/contact">contact</a></li>
     </ul>
</div>
  )
}

export default Nvbr