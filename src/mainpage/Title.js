import React from 'react';
import styles from './Title.module.css'
import VerticalFlexbox from './VerticalFlexbox';
import Margin from '../Margin';

const Title = () => {

    return (
    <section className={styles.Title}>
        <VerticalFlexbox>
            <h1 className={styles.name}>Gun Woo Kim</h1>
            <div className={styles.pronunciation}>/kɑ.nu kim/</div>

            <p className={styles.descriptions}>Rising Sophomore at Grinnell College</p>
            <p className={styles.descriptions}><u>Interest in:</u> ML, Finance, Neuroscience</p>
            <p className={styles.descriptions}><u>Main Language:</u> C++, Python</p>
            <p className={styles.descriptions}><u>Currently Studying:</u> Machine Learning</p>
            <p className={styles.descriptions}><u>Currently Reading:</u> <i>Effective Modern C++</i></p>
            {/* <p className={styles.descriptions}><u>Location:</u> Grinnell, IA, USA</p>
            <p className={styles.descriptions}><u>Phone:</u> +1 641 501 8979</p>
            <p className={styles.descriptions}><u>Email:</u> closhuh@gmail.com</p> */}
            <p className={styles.descriptions}> <a href="https://www.linkedin.com/in/gunwook/" target="_blank">LinkedIn</a> </p>
            <p className={styles.descriptions}> <a href="https://github.com/Quinsh" target="_blank">Github</a> </p>
            <p className={styles.descriptions}> <a href="https://leetcode.com/u/movement78/" target="_blank">LeetCode</a> </p>
            <p className={styles.descriptions}> <a href="https://solved.ac/en/profile/senadiel" target="_blank">Baekjoon OJ</a> </p>
            <Margin size={2}/>
        </VerticalFlexbox>
    </section>
    )
};


export default Title;