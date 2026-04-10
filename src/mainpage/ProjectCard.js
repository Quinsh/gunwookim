import React from 'react';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ title, languages, date, description, projectLink, image }) => {
    return (
        <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
            aria-label={`${title} — open project`}
        >
            <div className={styles.thumb}>
                <img src={image} alt="" loading="lazy" decoding="async" />
            </div>
            <div className={styles.body}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.meta}>
                    <span>{languages}</span>
                    <span className={styles.metaSep} aria-hidden="true">
                        ·
                    </span>
                    <span>{date}</span>
                </p>
                <p className={styles.description}>{description}</p>
                <span className={styles.cta}>View project →</span>
            </div>
        </a>
    );
};

export default ProjectCard;
