import React from 'react';
import styles from './Education.module.css'
import VerticalFlexboxFix from "./VerticalFlexboxFix";
import EducationRow from './EducationRow';
import Margin from '../Margin';

const isMobile = window.innerWidth <= 768;

const Education = () => {
    const education = [
        {
            period: '2023 - 2027',
            school: <a href="https://www.grinnell.edu/" target="_blank">Grinnell College</a>,
            degree: 'B.A. CS, Math',
            gpa: 'GPA: 3.95/4.00',
            description: 'Relevant Coursework: Functional Programming, OOP w/ Java, Operating Systems, Multivariable Calculus, Linear Algebra, Number Theory, Differential Equations, Fundamentals of Real Analysis',
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
        <VerticalFlexboxFix width={'55em'}>
            <h2>Education</h2>
            <div className={styles.onlyMobile}>(click row for details)</div>

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

            <Margin size={3}/>
        </VerticalFlexboxFix>
    );
};

export default Education; 