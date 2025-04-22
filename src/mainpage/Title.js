import React from 'react';
import styles from './Title.module.css'
import VerticalFlexbox from './VerticalFlexbox';
import Margin from '../Margin';

const Title = () => {

    return (
    <section className={styles.Title}>
        <VerticalFlexbox>
            <h1 className={styles.name}>GunWoo (Kai) Kim</h1>
            <div className={styles.pronunciation}>/kʌ.nu kim/</div>

            <p className={styles.descriptions}>Bachelor in CS & Math. 2026' Grinnell College</p>

            <p className={styles.descriptions}><u>Main Language:</u> Python, C++, JavaScript/TypeScript</p>
            <br/>
            <p className={styles.descriptions}> <a href="https://www.linkedin.com/in/gunwook/" target="_blank">LinkedIn</a> </p>
            <p className={styles.descriptions}> <a href="https://github.com/Quinsh" target="_blank">Github</a> </p>
            <p className={styles.descriptions}> <a href="https://leetcode.com/u/movement78/" target="_blank">LeetCode</a> </p>
            <p className={styles.descriptions}> <a href="https://solved.ac/en/profile/senadiel" target="_blank">Baekjoon OJ</a> </p>
            <Margin size={1}/>
        </VerticalFlexbox>
    </section>  
    )
};


export default Title;