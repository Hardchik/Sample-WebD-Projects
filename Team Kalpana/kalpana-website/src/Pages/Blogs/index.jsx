import React from 'react';
import styles from "./Blogs.module.css";
import Carousel from '../../Components/Carousel';
import ImageList from "./ImageList.json";
import BlogsContainer from './BlogsContainer';

export default function index() {
  return (
    <div className={styles.blogsPage}>
      <Carousel ImageList={ImageList} />
      <div className={styles.horizontalRule}></div>
      <BlogsContainer />
    </div>
  )
}
