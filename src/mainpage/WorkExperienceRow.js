import React, { useEffect, useRef, useState } from 'react';
import styles from './WorkExperienceRow.module.css';

const WorkExperienceRow = ({ period, company, position, location, description, companyLogo }) => {
    const rowRef = useRef(null);
    const [revealed, setRevealed] = useState(false);

    useEffect(() => {
        const el = rowRef.current;
        if (!el) return undefined;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setRevealed(entry.isIntersecting);
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.12,
            }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div className={styles.block} ref={rowRef}>
            <div className={styles.rowHeader}>
                <div className={styles.leftCluster}>
                    <div className={styles.cellPeriod}>{period}</div>
                    <div className={styles.cellLogo}>
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
                    <div className={styles.cellMain}>{company}</div>
                </div>
                <div className={styles.rightCluster}>
                    <div className={styles.cellR1}>{position}</div>
                    <div className={styles.cellR2}>{location}</div>
                </div>
            </div>
            <div
                className={`${styles.description} ${revealed ? styles.descriptionRevealed : ''}`}
                aria-hidden={!revealed}
            >
                {description}
            </div>
        </div>
    );
};

export default WorkExperienceRow;
