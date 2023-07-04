import React from 'react'
import styles from './Team.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons';

const card = (props) => {
  const img = require(`../../Assets/Images/img/${props.img}`);

  function stringToCssClassname(s)
  {
    var css = "";
    s.split(" ").forEach(element => { css += " "+styles[element] });
    return css;
  }

  return (
    <div className={styles.card}>
      <div className={styles.cover}>
        <img className={styles.profile} src={img} alt=''/>
      </div>
        
        <h3 className={styles.member_name}>{props.name}</h3>
        <h2 className={styles.por}>{props.por}</h2>
        <div className={styles.socials}>
          <a href='https://www.linkedin.com/'><FontAwesomeIcon className={styles.linkedin} icon={faLinkedin}/></a>
          <a href='https://www.instagram.com/'><FontAwesomeIcon className={styles.insta} icon={faInstagram}/></a>
          <a href='https://www.facebook.com/'><FontAwesomeIcon className={styles.facebook} icon={faFacebook}/></a>
          <a href='https://www.twitter.com/'><FontAwesomeIcon className={styles.twitter} icon={faTwitter}/></a>
        </div>
    </div>
  )
}

export default card