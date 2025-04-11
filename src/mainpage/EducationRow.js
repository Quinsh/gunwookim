import React from 'react';
import styles from './EducationRow.module.css';

const EducationRow = ({ period, school, degree, gpa, description, schoolLogo }) => {
    return (
        <>
            <div className={styles.EducationRow}>
                <div className={styles.firstTwo}>
                    <div className={styles.equalWidthItemLeft}>{period}</div>
                    <div className={styles.schoolLogo}>
                        {schoolLogo && (
                            <img 
                                src={schoolLogo} 
                                alt={`${school} logo`} 
                                className={styles.logoImage}
                                onError={(e) => {
                                    console.error('Error loading image:', schoolLogo);
                                    e.target.style.display = 'none';
                                }}
                            />
                        )}
                    </div>
                    <div className={styles.equalWidthItemLeft}>{school}</div>
                </div>
                <div className={styles.lastTwo}>
                    <div className={styles.equalWidthItemRight}>{degree}</div>
                    <div className={styles.equalWidthItemRight}>{gpa}</div>
                </div>
            </div>
            <div className={styles.description}>{description}</div>
        </>
    );
};

export default EducationRow; 