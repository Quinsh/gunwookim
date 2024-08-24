import React from 'react';
import styles from './ProjectRow.module.css';

const ProjectRow = ({ children, style = {} }) => {
    return (
        <>
            <div className={styles.projectRow} style={style}>
                <div className={styles.firstItem}>{children[0]}</div> {/* First item */}
                <div className={styles.lastThreeItemsContainer}>
                    <div className={styles.equalWidthItem}>{children[1]}</div>
                    <div className={styles.equalWidthItem}>{children[2]}</div>
                    <div className={styles.equalWidthItem}>{children[3]}</div>
                </div>
            </div>

            <div className={styles.description}>{children[4]}</div>
        </>
    );
};

export default ProjectRow;