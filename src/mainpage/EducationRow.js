import React, { useEffect, useRef, useState } from 'react';
import styles from './EducationRow.module.css';

const EducationRow = ({ period, school, degree, gpa, description, schoolLogo }) => {
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

    const logoAlt =
        typeof school === 'string' ? `${school} logo` : 'School logo';

    return (
        <div className={styles.block} ref={rowRef}>
            <div className={styles.rowHeader}>
                <div className={styles.leftCluster}>
                    <div className={styles.cellPeriod}>{period}</div>
                    <div className={styles.cellLogo}>
                        {schoolLogo && (
                            <img
                                src={schoolLogo}
                                alt={logoAlt}
                                className={styles.logoImage}
                                onError={(e) => {
                                    console.error('Error loading image:', schoolLogo);
                                    e.target.style.display = 'none';
                                }}
                            />
                        )}
                    </div>
                    <div className={styles.cellMain}>{school}</div>
                </div>
                <div className={styles.rightCluster}>
                    <div className={styles.cellR1}>{degree}</div>
                    <div className={styles.cellR2}>{gpa}</div>
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

export default EducationRow;
