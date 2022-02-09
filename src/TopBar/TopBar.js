import React from 'react';
import photo from './header.png';
import './TopBar.css';
 const TopBar = (props) => {
     return (
         <div >
             <nav className='navBar'>
               <img src={photo} alt='amazon logo'/>
             </nav>
         </div>
     );
 }
 export default TopBar;
