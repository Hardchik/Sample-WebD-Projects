import React, { useEffect, useRef } from 'react';
import styles from "./Carousel.module.css";

export default function Carousel(props) {
  const { ImageList } = props;
  const carouselSlide = useRef(null);
  const carouselMeter = useRef(null);
  
  // Buttons
  const prevBtn = useRef(null);
  const nextBtn = useRef(null);
    
  useEffect(() => {
    const carouselImages = [...carouselSlide.current.querySelectorAll("img")];
    const circles = [...carouselMeter.current.children];

    circles[0].style.backgroundColor = 'rgb(225, 225, 225)';
    
    // Counter
    let counter = 1;
    const size = carouselImages[0].clientWidth;

    carouselSlide.current.style.transform = `translateX(${-size * counter}px)`;
    
    // Button Listeners
    function next(amount) {
      if (counter >= carouselImages.length - 1) return;
      circles[counter - 1].style.backgroundColor = "rgba(255, 255, 255, 0.4)";
      carouselSlide.current.style.transition = "transform 0.4s ease-in-out";
      counter += amount;
      carouselSlide.current.style.transform = `translateX(${-size * counter}px)`;
    }
    
    function prev(amount) {
      if (counter <= 0) return;
      circles[counter - 1].style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
      carouselSlide.current.style.transition = "transform 0.4s ease-in-out";
      counter -= amount;
      carouselSlide.current.style.transform = `translateX(${-size * counter}px)`;
    }
    
    nextBtn.current.addEventListener('click', () => {next(1)});
    
    prevBtn.current.addEventListener('click', () => {prev(1)});
    
    carouselSlide.current.addEventListener('transitionend', () => {
      if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.current.style.transition = 'none';
        counter = carouselImages.length - 2;
        carouselSlide.current.style.transform = `translateX(${-size * counter}px)`;
      }
      if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.current.style.transition = 'none';
        counter = 1;
        carouselSlide.current.style.transform = `translateX(${-size * counter}px)`;
      }
      circles[counter - 1].style.backgroundColor = 'rgb(255, 255, 255)';
    })
    
    // Carousel Meter
    circles.forEach(circle => {
      circle.addEventListener("click", () => {
        const amount = counter - circles.indexOf(circle);
        if (amount < 1) next(Math.abs(amount) + 1);
        else if (amount > 1) prev(amount - 1);
        else return;
      })
    })
    
    // Automatic Slide
    let interval = null;

    function startInterval() {
      interval = setInterval(() => {
        next(1);
      }, 7000);
    }
    
    nextBtn.current.addEventListener('mouseover', () => clearInterval(interval));
    nextBtn.current.addEventListener('mouseleave', startInterval);
    
    prevBtn.current.addEventListener('mouseover', () => clearInterval(interval));
    prevBtn.current.addEventListener('mouseleave', startInterval);
    
    carouselSlide.current.addEventListener('mouseover', () => clearInterval(interval));
    carouselSlide.current.addEventListener('mouseleave', startInterval);
    
    carouselMeter.current.addEventListener('mouseover', () => clearInterval(interval));
    carouselMeter.current.addEventListener('mouseleave', startInterval);
  })

  return (
    <section>
      <div className={styles.carouselContainer}>
        <div className={`${styles.btn} ${styles.prev}`} ref={prevBtn}></div>
        <div className={`${styles.btn} ${styles.next}`} ref={nextBtn}></div>
        <div className={styles.carouselSlide} ref={carouselSlide}>
            <div className={styles.imageContainer}>
                <img src={ImageList[ImageList.length - 1].image} alt="" id="lastClone" />
            </div>
            {
              ImageList.map(Image => {
                return (
                  <div className={styles.imageContainer} key={Image.id}>
                    <img src={Image.image} alt="" />
                  </div>
                )
              })
            }
            <div className={styles.imageContainer}>
                <img src={ImageList[0].image} alt="" id="firstClone" />
            </div>
        </div>
      </div>
      <div className={styles.carouselMeter} ref={carouselMeter}>
        {
          ImageList.map(Image => {
            return (
              <div className={styles.circle} key={Image.id}></div>
            )
          })
        }
      </div>
    </section>
  )
}