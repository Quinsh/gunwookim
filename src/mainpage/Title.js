import React, { useState, useEffect, useRef } from 'react';
import styles from './Title.module.css'
import VerticalFlexbox from './VerticalFlexbox';
import Margin from '../Margin';

const Title = () => {
    const [isAiPhoto, setIsAiPhoto] = useState(false);
    const [nameWidth, setNameWidth] = useState(0);
    const intervalRef = useRef(null);
    const timeoutRef = useRef(null);
    const nameRef = useRef(null);

    const flipPhoto = () => setIsAiPhoto((prev) => !prev);

    // Auto-flip logic
    useEffect(() => {
        // Flip 2 seconds after load
        timeoutRef.current = setTimeout(() => {
            flipPhoto();
            // Then flip every 5 seconds
            intervalRef.current = setInterval(flipPhoto, 5000);
        }, 1000);
        return () => {
            clearTimeout(timeoutRef.current);
            clearInterval(intervalRef.current);
        };
    }, []);

    useEffect(() => {
        const nameElement = nameRef.current;

        if (!nameElement) return undefined;

        const updateNameWidth = () => {
            setNameWidth(nameElement.getBoundingClientRect().width);
        };

        updateNameWidth();

        if (typeof ResizeObserver !== "undefined") {
            const resizeObserver = new ResizeObserver(updateNameWidth);
            resizeObserver.observe(nameElement);

            return () => resizeObserver.disconnect();
        }

        window.addEventListener("resize", updateNameWidth);
        return () => window.removeEventListener("resize", updateNameWidth);
    }, []);

    // Reset timer on manual click
    const handlePhotoClick = () => {
        flipPhoto();
        clearTimeout(timeoutRef.current);
        clearInterval(intervalRef.current);
        // Restart auto-flip after 5s
        intervalRef.current = setInterval(flipPhoto, 5000);
    };

    return (
    <section className={styles.Title}>
        <VerticalFlexbox>
            <div className={styles.container}>
                <div className={styles.bar}>
                    <span className={styles.text}>Developing cool financial programs and trading strategies</span>
                    <span className={styles.text} aria-hidden="true">Developing cool financial programs and trading strategies</span>
                </div>
                <div className={styles.fadeLeft}></div>
                <div className={styles.fadeRight}></div>
            </div>
            <Margin size={1}/>
            <div className={styles.photoBadge} onClick={handlePhotoClick}>
                <div className={`${styles.flipContainer} ${isAiPhoto ? styles.flipped : ''}`}>
                    <img 
                        src={process.env.PUBLIC_URL + "/images/main/gunwookim4.png"}
                        alt="Real Photo"
                        className={`${styles.profileImage} ${styles.front}`}
                    />
                    <img 
                        src={process.env.PUBLIC_URL + "/images/main/toothless1.png"}
                        alt="AI Photo"
                        className={`${styles.profileImage} ${styles.back}`}
                    />
                </div>
            </div>
            <Margin size={1}/>
            <h1 ref={nameRef} className={styles.name}>Gun Woo (Kai) Kim</h1>
            <div className={styles.pronunciation}>🪷 /kʌ.nu kim/</div>
            <p className={styles.descriptions}>BSOR'28 @ Columbia University</p>
            <p className={styles.descriptions}> kai [dot] kim [at] columbia [dot] edu</p>

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
    
            
            <div
                className={styles.separator}
                style={nameWidth ? { maxWidth: `${Math.round(nameWidth)}px` } : undefined}
                aria-hidden="true"
            />

            <p
                className={styles.introductionText}
                style={nameWidth ? { maxWidth: `${Math.round(nameWidth)}px` } : undefined}
            >
                Hi. I like implementing financial strategies and programs. Aiming for $1M AUM before graduation. Currently, transferring to Columbia for Operations Research program. Feel free to connect.
            </p>

            {/* <Margin size={1}/>
            <div className={styles.navButtons}>
                <a href="#projects" className={styles.navButton}>Projects</a>
                <a href="#work-experience" className={styles.navButton}>Work Experience</a>
                <a href="#education" className={styles.navButton}>Education</a>
            </div>
            <Margin size={1}/> */}
        </VerticalFlexbox>
    </section>  
    )
};


export default Title;