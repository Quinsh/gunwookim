import React from 'react';
import styles from './Title.module.css'
import VerticalFlexbox from './VerticalFlexbox';
import Margin from '../Margin';

const Title = () => {

    return (
    <section className={styles.Title}>
        <VerticalFlexbox>
            <img 
                src={process.env.PUBLIC_URL + "/images/main/gunwookim.png"} 
                alt="Gun Woo Kim" 
                className={styles.profileImage}
            />
            <Margin size={1}/>
            <h1 className={styles.name}>GunWoo (Kai) Kim</h1>
            <div className={styles.pronunciation}>/kʌ.nu kim/</div>

            <p className={styles.descriptions}>Bachelor in CS & Math. 2027' Grinnell College</p>

            <p className={styles.descriptions}><u>Main Language:</u> Python, C++, JavaScript/TypeScript</p>
            <br/>
            <div className={styles.linksContainer}>
                <a href="https://www.linkedin.com/in/gunwook/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                    <img src={process.env.PUBLIC_URL + "/images/icons/linkedin.png"} alt="LinkedIn" className={styles.icon} />
                    <span>LinkedIn</span>
                </a>
                <a href="https://github.com/Quinsh" target="_blank" rel="noopener noreferrer" className={styles.link}>
                    <img src={process.env.PUBLIC_URL + "/images/icons/github.png"} alt="GitHub" className={styles.icon} />
                    <span>GitHub</span>
                </a>
                <a href="https://leetcode.com/u/movement78/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                    <img src={process.env.PUBLIC_URL + "/images/icons/leetcode.png"} alt="LeetCode" className={styles.icon} />
                    <span>LeetCode</span>
                </a>
                <a href="https://solved.ac/en/profile/senadiel" target="_blank" rel="noopener noreferrer" className={styles.link}>
                    <img src={process.env.PUBLIC_URL + "/images/icons/solved.png"} alt="Baekjoon OJ" className={styles.icon} />
                    <span>Baekjoon OJ</span>
                </a>
            </div>
            <Margin size={1}/>
            <div className={styles.navButtons}>
                <a href="#projects" className={styles.navButton}>Projects</a>
                <a href="#work-experience" className={styles.navButton}>Work Experience</a>
                <a href="#education" className={styles.navButton}>Education</a>
            </div>
            <Margin size={1}/>
        </VerticalFlexbox>
    </section>  
    )
};


export default Title;