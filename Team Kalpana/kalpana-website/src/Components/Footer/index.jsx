import React from 'react';
import "./Footer.scss";
import { Link } from "react-router-dom";
import {FaInstagramSquare, FaFacebookSquare, FaYoutube, FaLinkedin} from "react-icons/fa";
import logo from "../../Assets/Logo/kalpanacaps.png";

export default function Footer() {
  return (
    <div className="body">
      <footer className="flex-rw">
          
          <ul className="footer-list-top">
            <li>
              <h4 className="footer-list-header">Team Kalpana</h4></li>
            <li className="society-description">A society for hard working, like-mided people who are enthusiastic about space exploration.</li>
            <li className="society-description" style={{paddingTop: 30}}>Mail us: <p style={{textDecoration: 'underline'}}>teamkalapana@gmail.com</p></li>
          </ul>
          <ul className="footer-list-top">
            <li>
              <img src={logo} alt="logo" style={{width:'180px'}} />
            </li>
            <li style={{color:'white', fontSize:'15px'}}>Netaji Subhas University of Technology, Dwarka Sec-3, Delhi</li>
          </ul>
          <ul className="footer-list-top">
            <li id='help'>
              <h4 className="footer-list-header">Site Map</h4></li>
            <li><Link to='/' className="generic-anchor footer-list-anchor" itemProp="significantLink">HOME</Link></li>
            <li><Link to='/team' className="generic-anchor footer-list-anchor" itemProp="significantLink">TEAM</Link></li>
            <li id='find-a-store'><Link to='/achievements' className="generic-anchor footer-list-anchor" itemProp="significantLink">ACHIEVEMENTS</Link></li>
            <li id='user-registration'><Link to='/sponsors' className="generic-anchor footer-list-anchor" itemProp="significantLink">SPONSORS</Link></li>
            <li id='order-tracking'><Link to='/blogs' itemProp="significantLink" className="generic-anchor footer-list-anchor">BLOGS</Link></li>
          </ul>
          <section className="footer-social-section flex-rw">
              <span className="footer-social-overlap footer-social-connect">
              CONNECT <span className="footer-social-small">with</span> US
              </span>
              <span className="footer-social-overlap footer-social-icons-wrapper">
              <a href="https://www.facebook.com/Team-Kalpana-425579541226330/" rel="noreferrer" className="generic-anchor" target="_blank" title="Facebook" itemProp="significantLink"><FaFacebookSquare /></a>
              <a href="https://in.linkedin.com/company/team-kalpana" rel="noreferrer" className="generic-anchor" target="_blank" title="Twitter" itemProp="significantLink"><FaLinkedin /></a>
              <a href="https://www.instagram.com/teamkalpanansut/" rel="noreferrer" className="generic-anchor" target="_blank" title="Instagram" itemProp="significantLink"><FaInstagramSquare /></a>
              <a href="https://www.youtube.com/channel/UCYgUODvd0qXbu_LkUWpTVEg" rel="noreferrer" className="generic-anchor" target="_blank" title="Youtube" itemProp="significantLink"><FaYoutube /></a>
              </span>
          </section>
          <section className="footer-bottom-section flex-rw">
        <div className="footer-bottom-wrapper">   
        <i className="fa fa-copyright">
        
        </i> <span>ⓒ 2022 Copyright: Team Kalpana - All Rights Reserved - </span>
            </div>
            <div className="footer-bottom-wrapper">
            <a href="/terms-of-use.html" className="generic-anchor" rel="nofollow">Terms</a> | <a href="/privacy-policy.html" className="generic-anchor" rel="nofollow">Privacy</a>
              </div>
          </section>
      </footer>
    </div>
  )
}
