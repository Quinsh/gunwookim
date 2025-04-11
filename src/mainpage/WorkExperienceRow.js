import React from 'react';
import styles from './WorkExperienceRow.module.css';

const WorkExperienceRow = ({ company, position, period, location, companyLogo, description }) => {
    const handleImageError = (e) => {
        console.error('Error loading image:', companyLogo);
        e.target.style.display = 'none';
    };

    return (
        <>
            <div className={styles.WorkExperienceRow}>
                <div className={styles.firstTwo}>
                    <div className={styles.equalWidthItemLeft}>{period}</div>
                    <div className={styles.companyLogo}>
                        {companyLogo && (
                            <img 
                                src={companyLogo} 
                                alt={`${company} logo`} 
                                className={styles.logoImage}
                                onError={handleImageError}
                            />
                        )}
                    </div>
                    <div className={styles.equalWidthItemLeft}>{company}</div>
                </div>
                <div className={styles.lastTwo}>
                    <div className={styles.equalWidthItemRight}>{position}</div>
                    <div className={styles.equalWidthItemRight}>{location}</div>
                </div>
            </div>
            <div className={styles.description}>{description}</div>
        </>
    );
};

export default WorkExperienceRow;

