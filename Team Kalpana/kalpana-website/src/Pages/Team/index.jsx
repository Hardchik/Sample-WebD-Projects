import React from 'react';
import styles from "./Team.module.css"
import Card from './Card'
import Banner from '../../Components/Banner/Banner'

import Members_Lead from './Members-Lead.json'
import Members_UAS from './Members_UAS.json'
import Members_SSC from './Members_SSC.json'

export default function index() {
  return (
    <>
      {/* <div className={styles.team__heading}><h1 >MEET THE TEAM</h1></div> */}
      <Banner
        title="OUR TEAM"
      />
      <div className={styles.content}>
          <div className={styles.team__head}><h1 >TEAM LEADS</h1></div>
          <div className={styles.grid}>
            {Members_Lead.map(member => {
              return(
                
                <Card
                  key={member.id}
                  img={member.img}
                  por={member.por}
                  name={member.name}
                />
              )
            })}
            </div>
      </div>

      <div className={styles.content}>
          <div className={styles.team__head}><h1 >UAS CHAPTER</h1></div>
            <div className={styles.grid}>
            {Members_UAS.map(member => {
              return(
                <Card
                  key={member.id}
                  img={member.img}
                  por={member.por}
                  name={member.name}
                />
              )
            })}   
            </div>
      </div>

      <div className={styles.content}>
          <div className={styles.team__head}><h1 >SSC CHAPTER</h1></div>
            <div className={styles.grid}>
            {Members_SSC.map(member => {
              return(
                <Card
                  key={member.id}
                  img={member.img}
                  por={member.por}
                  name={member.name}
                />
              )
            })}   
            </div>
      </div>
    </>
  )
}
