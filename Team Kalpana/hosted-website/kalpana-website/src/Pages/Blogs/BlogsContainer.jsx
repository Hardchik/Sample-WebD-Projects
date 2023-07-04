import React from 'react';
import styles from "./Blogs.module.css";
import Blogs from "./Blogs.json";
import BlogCard from './BlogCard';
import { useRef, useEffect } from "react";

export default function BlogsContainer() {
  const searchInput = useRef(null);
  const dateInput = useRef(null);
  const blogsContainer = useRef(null);

  useEffect(() => {
    const searchInp = searchInput;
    const dateInp = dateInput;
    const blogCards = [...blogsContainer.current.children];

    function searchInBlogsByText(txt) {
      blogCards.forEach(blogCard => {
        if (txt === "") {
          blogCard.style.display = "block";
          return;
        }
        if (blogCard.getAttribute("data-heading").toLowerCase().includes(txt)) blogCard.style.display = "block";
        else blogCard.style.display = "none";
      })
    }
    
    function searchInBlogsByDate(date) {
      blogCards.forEach(blogCard => {
        if (date === "") {
          blogCard.style.display = "block";
          return;
        }
        if (blogCard.getAttribute("data-date") === date) blogCard.style.display = "block";
        else blogCard.style.display = "none";
      })
    }

    searchInp.current.addEventListener("input", e => { searchInBlogsByText(e.target.value.toLowerCase()); });
    dateInp.current.addEventListener("input", e => { searchInBlogsByDate(e.target.value); });
  }, [])

  return (
    <>
    <div className={styles.heading}>BROWSE ALL BLOGS</div>
    <div className={styles.searchWrapper}>
      <input type="search" name="search blogs" id="searchBlogs" ref={searchInput} className={styles.searchInput} placeholder="Search Blogs" />
      <input type="date" name="dateInput" id="dateInput" ref={dateInput} className={styles.dateInput} />
    </div>
    <section className={styles.blogsContainer} ref={blogsContainer}>
        {
            Blogs.map(blog => {
                return (
                    <BlogCard key={blog.id} blog={blog} />
                )
            })
        }
    </section>
    </>
  )
}
