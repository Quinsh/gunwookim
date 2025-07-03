import React, { useEffect, useRef } from 'react';
import styles from './WorkExperienceRow.module.css';

const WorkExperienceRow = ({ period, company, position, location, description, companyLogo }) => {
    const rowRef = useRef(null);
    const descriptionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    descriptionRef.current.style.margin = '1em 0 1em 25%';
                    descriptionRef.current.style.opacity = '1';
                    descriptionRef.current.style.maxHeight = '500px';
                } else {
                    descriptionRef.current.style.margin = '0 0 0 25%';
                    descriptionRef.current.style.opacity = '0';
                    descriptionRef.current.style.maxHeight = '0';
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            }
        );

        if (rowRef.current) {
            observer.observe(rowRef.current);
        }

        return () => {
            if (rowRef.current) {
                observer.unobserve(rowRef.current);
            }
        };
    }, []);

    return (
        <>
            <div className={styles.WorkExperienceRow} ref={rowRef}>
                <div className={styles.firstTwo}>
                    <div className={styles.equalWidthItemLeft}>{period}</div>
                    <div className={styles.companyLogo}>
                        {companyLogo && (
                            <img 
                                src={companyLogo} 
                                alt={`${company} logo`} 
                                className={styles.logoImage}
                                onError={(e) => {
                                    console.error('Error loading image:', companyLogo);
                                    e.target.style.display = 'none';
                                }}
                            />
                        )}
                    </div>
                    <div className={`${styles.equalWidthItemLeft} ${styles.company}`}>{company}</div>
                </div>
                <div className={styles.lastTwo}>
                    <div className={styles.equalWidthItemRight}>{position}</div>
                    <div className={styles.equalWidthItemRight}>{location}</div>
                </div>
            </div>
            <div className={styles.description} ref={descriptionRef}>
                {description}
            </div>
        </>
    );
};

export default WorkExperienceRow;


