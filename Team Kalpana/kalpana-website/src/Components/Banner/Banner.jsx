import './Banner.css'
import { useRef } from 'react';
import { motion } from 'framer-motion';

const Banner = (props) => {
    const BannerLinks = useRef(null);
    const BannerEnd = useRef(null);

    function setActiveYear(year) {
        props.setYear(year);
        const bannerLinks = [...BannerLinks.current.children];
        bannerLinks.forEach(bannerLink => {
            bannerLink.style.color = 'var(--tertiary-text-color)';
            if (bannerLink.id === year.toString()) bannerLink.style.color = 'var(--primary-text-color)';
        })
        // BannerEnd.current.scrollIntoView();
        window.scrollTo(0, BannerEnd.current.offsetTop-100);
    }

    return (
        <section id="banner">
            <motion.div 
            className="bannerContainer"
            initial={{opacity:0, y:80}}
            animate={{opacity:1, y:0}}
            transition={{ease: [0.6, 0.01, -0.05, 0.95], duration:0.45}}
            >
                <div className="years" ref={BannerLinks}>
                    {/*Pass a function "setActiveYear" which takes argument and modifies content based on year.*/}
                    <div className="bannerLink" id="2022" onClick={() => setActiveYear(2022)}>2022</div>
                    <div className="bannerLink" id="2021" onClick={() => setActiveYear(2021)}>2021</div>
                    <div className="bannerLink" id="2020" onClick={() => setActiveYear(2020)}>2020</div>
                    <div className="bannerLink" id="2019" onClick={() => setActiveYear(2019)}>2019</div>
                    <div className="bannerLink" id="2018" onClick={() => setActiveYear(2018)}>2018</div>
                </div>
                <div className="bannerContent">
                    <h3>TEAM KALPANA</h3>
                    {/* Pass the title for the Banner 2 WORDS ONLY RECOMMENDED */}
                    <h2>{props.title}</h2>
                </div>
            </motion.div>
            <div ref={BannerEnd}></div>
        </section>
    );
}

export default Banner;