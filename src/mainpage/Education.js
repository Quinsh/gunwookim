import React from 'react';
import styles from './Education.module.css';
import EducationRow from './EducationRow';
import Margin from '../Margin';

const Education = () => {
    const education = [
        {
            period: '2026 - 2028',
            school: (
                <a href="https://www.engineering.columbia.edu/" target="_blank" rel="noopener noreferrer">
                    Columbia University
                </a>
            ),
            degree: 'B.S. Operations Research',
            gpa: 'GPA: -',
            description: (
                <>
                    Operations Research and Financial Engineering at Columbia SEAS.
                </>
            ),
            logo: process.env.PUBLIC_URL + '/images/companies/columbia.png'
        },
        {
            period: '2023 - 2026',
            school: (
                <a href="https://www.grinnell.edu/" target="_blank" rel="noopener noreferrer">
                    Grinnell College
                </a>
            ),
            degree: 'B.A. Mathematics',
            gpa: 'GPA: 3.90/4.00',
            description: (
                <>
                    <b>Relevant Coursework</b><br/> <br/>
                    <u>Math:</u> Real Analysis, Probability I & II, Abstract Algebra, Differential Equations, Multivariable Calculus, Number Theory, Linear Algebra
                    <br/> <br/>
                    <u>CS:</u> Automata Theory, Operating Systems, Algorithms, OOP w/ Java, Software Development, Functional Programming
                </>
            ),
            logo: process.env.PUBLIC_URL + '/images/companies/grinnell.png'
        },
        {
            period: '~ 2023',
            school: 'Korea University',
            degree: 'B.S. Computer Science',
            gpa: 'GPA: -',
            description: '23학번 컴과. Dropped out.',
            logo: process.env.PUBLIC_URL + '/images/companies/koreauniv.png'
        }
    ];

    return (
        <div id="education" className={styles.root}>
            <div className={styles.inner}>
                <h2>Education</h2>
                <div className={styles.onlyMobile}>(scroll row into view for details)</div>

                {education.map((edu, index) => (
                    <EducationRow
                        key={index}
                        period={edu.period}
                        school={edu.school}
                        degree={edu.degree}
                        gpa={edu.gpa}
                        description={edu.description}
                        schoolLogo={edu.logo}
                    />
                ))}

                <Margin size={3} />
            </div>
        </div>
    );
};

export default Education; 