import React from 'react'
import styles from "./Blogs.module.css";
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from "react-icons/ai";

export default function BlogCard(props) {
  return (
    <Link to={`/blogs/${props.blog.id}`} data-heading={props.blog.heading} data-date={props.blog.date}>
      <div className={styles.blogCard}>
        <div className={styles.cardSlider}>
          <img src={props.blog.image} alt="" className={styles.cardImage} />
          <div className={styles.bottomContainer}>
            <div className={styles.cardHeading}>{props.blog.heading}</div>
            <div className={styles.cardDate}>{props.blog.date}</div>
            <div className={styles.cardDescription}>{props.blog.description}</div>
          </div>
          <div className={styles.arrow}>
            <AiOutlineArrowRight />
            <div>Read More</div>
          </div>
        </div>
        
      </div>
    </Link>
  )
}
