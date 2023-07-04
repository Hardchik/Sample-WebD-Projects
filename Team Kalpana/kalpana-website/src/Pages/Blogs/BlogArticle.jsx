import React from 'react';
import { useParams } from 'react-router-dom';
import styles from "./Blogs.module.css";
import blogs from "./Blogs.json";
import Markdown from './Markdown';


export default function BlogArticle() {
  const { id } = useParams();
  const blog = blogs.filter(blog => {return blog.id.toString() === id})[0];
  
  window.scrollTo(0,0);

  return (
    <section className={styles.blogArticleSection}>
      <img src={blog.image} alt="" className={styles.blogImage} />
      <div className={styles.blogContainer}>
        <div className={styles.blogHeading}>{blog.heading}</div>
        <div className="bottomRule"></div>
        <div className={styles.blogDate}>{blog.date}</div>
        <Markdown content={blog.content} />
      </div>
    </section>
  )
}
