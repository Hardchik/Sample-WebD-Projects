import React, { useEffect, useRef } from 'react';
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import {BsFillMenuButtonWideFill} from 'react-icons/bs';
import logo from '../../Assets/Logo/kalpanacaps.png';

export default function Navbar() {

  const CheckBox = useRef(null);
  const NavLinksContainer = useRef(null);
  
  useEffect(() => {
    const NavLinks = [...NavLinksContainer.current.children];
    function uncheck() {
      CheckBox.current.checked = false;
    }
    NavLinks.forEach(NavLink => {
      NavLink.addEventListener('click', uncheck);
    })
    
    return (() => {
      NavLinks.forEach(NavLink => {
        NavLink.removeEventListener('click', uncheck);
      })
    }) 
  })
  
  return (
    <div className={styles.navb}>
      <nav className={styles.navbar}>
         <div className={styles.logo} style={{display: 'flex', alignItems: 'center'}}>
          <img src={logo} alt="logo" style={{width:'100px'}} />
            <p className={styles.nav_title}>Team Kalpana</p>
         </div>
         <input ref={CheckBox} type="checkbox" id="click" className={styles.click} />
         <label htmlFor="click" className={styles.menu_btn}>
         {/* <i className="fas fa-bars"></i> */}
          <BsFillMenuButtonWideFill className={styles.fas}/>
         </label>
         <ul ref={NavLinksContainer}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/achievements">Achievements</Link></li>
            <li><Link to="/sponsors">Sponsors</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
         </ul>
      </nav>
    </div>
  )
}