import React, { useState } from 'react'
import '../../style/nav.css';
import {NavLink} from 'react-router-dom';
import Logo from '../../Assets/BlackMark.cf17c487.png';

const Nav = () => {

   const  [Click,setClick] = useState(false);

   const handleClick = ()=> { setClick(!Click);}
   
  const menu = (Click)=>{

    const menuBr = ()=> {
      return ( Click?'':'block');
    }
    return(
      <div className={`menu ${menuBr()}`}>
          <ul className="menuItems">
            <NavLink to='/artworks' className="Nav_link" activeClassName="activeRoute" activeStyle={{ color: 'black, teal' }} ><li>Art Work</li></NavLink>
            <NavLink to='/home' className="Nav_link" activeClassName="activeRoute" activeStyle={{ color: 'black, teal' }}><li>Home</li></NavLink>
            <NavLink to='/creators' className="Nav_link" activeClassName="activeRoute" activeStyle={{ color: 'black, teal' }}><li>Creators</li></NavLink>
          </ul>
          
      </div>
    );
  }
  return (
    <div className="container">
        <div className="logo">
          <NavLink to='/' className="logoA">
          <img src={Logo} alt='safe art' className='logoSafe'/>
          </NavLink>
        </div>

        <div >
        {menu(Click)}
        </div>

        <div>
         <button className="walletBtn">Connect Wallet</button>
        </div>
        
        <button className="bar" onClick={handleClick}><i class={Click?'fas fa-times fa-2x':'fas fa-bars fa-2x'}></i></button>  
        
      
    </div>
  )
}

export default Nav
