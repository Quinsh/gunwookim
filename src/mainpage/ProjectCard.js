import React from 'react';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ 
    title, 
    languages, 
    linesOfCode, 
    date, 
    description, 
    projectLink, 
    image, 
    isActive 
}) => {
    return (
        <div className={`${styles.projectCard} ${isActive ? styles.active : ''}`}>
            <div className={styles.projectHeader}>
                <h3>{title}</h3>
                <div className={styles.projectMeta}>
                    <span>{languages}</span>
                    <span>{linesOfCode}</span>
                    <span>{date}</span>
                </div>
                <a href={projectLink} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                    View Project
                </a>
            </div>
            <div className={styles.projectImage}>
                <img src={image} alt={title} />
            </div>
            <div className={styles.projectDescription}>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard; 