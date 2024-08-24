import React from 'react';
import styles from './WorkExperienceRow.module.css';

const WorkExperienceRow = ({ children, style = {} }) => {
    return (
        <>
            <div className={styles.WorkExperienceRow} style={style}>
                <div className={styles.firstTwo}>
                    <div className={styles.equalWidthItemLeft}>{children[0]}</div>
                    <div className={styles.equalWidthItemLeft}>{children[1]}</div>
                </div>
                <div className={styles.lastTwo}>
                    <div className={styles.equalWidthItemRight}>{children[2]}</div>
                    <div className={styles.equalWidthItemRight}>{children[3]}</div>
                </div>
            </div>

            <div className={styles.description}>{children[4]}</div>
        </>
        
    );
};

export default WorkExperienceRow;

