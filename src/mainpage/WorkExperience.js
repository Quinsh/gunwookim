import React from 'react';
import styles from './WorkExperience.module.css';
import WorkExperienceRow from './WorkExperienceRow';
import Margin from '../Margin';

const WorkExperience = () => {
    const experiences = [
        {
            period: '2026/06 - 2026/08',
            company: 'Grinnell College',
            position: 'Researcher',
            location: 'Grinnell, IA',
            description: (
                <>
                    Research on Decision Procedure for Probabilistic Kleene Algebra with Angelic Nondeterminism with <a href="https://shawnong60.github.io/index.html" target="_blank" rel="noopener noreferrer">Prof. Shawn Ong</a>
                </>
            ),
            logo: process.env.PUBLIC_URL + '/images/companies/grinnell.png'
        },
        {
            period: '2025/06 - 2025/08',
            company: 'Mathematics Research',
            position: 'Researcher',
            location: '',
            description: (
                <>
                    Researched <b>generative machine learning models</b> for <b>data assimilation</b> under the mentorship of Dr. Ricardo Baptista (Caltech) and Prof. Giulio Trigila (Baruch College, CUNY). Developed algorithms to sample from complex probability distributions using <b>optimal transport</b> techniques.
                </>
            ),
            logo: process.env.PUBLIC_URL + '/images/companies/caltech.png'
        },
        // {
        //     period: '2025/05 - 2025/07',
        //     company: 'Statistics Department, Grinnell',
        //     position: 'Researcher',
        //     location: 'Grinnell, IA',
        //     description: (
        //         <>
        //             Built educational tools and simulations for statistics and epidemiology using <b>Unity (C#)</b>, <b>R</b>, <b>PHP</b>, and <b>JavaScript</b>.<br/>
        //             Applied <b>Kalman Filters</b> in <b>R</b> to estimate <b>SIR model</b> parameters for real-time <b>infectious disease modeling</b>.
        //         </>
        //     ),
        //     logo: process.env.PUBLIC_URL + '/images/companies/grinnell.png'
        // },
        {
            period: '2024/06 - 2024/08 (3mo)',
            company: 'BTG Pactual',
            position: 'Full Stack Intern',
            location: 'Sao Paulo, Brazil',
            description: (
                <>
                    Played a part in developing an intranet payment portal used by <b>50+ internal users</b> to process <b>$1B+</b> in contracts and payments between the bank and other service providers. I was in charge of developing the <b>delegate payment</b> functionality, which included modifying the <b>database</b>, creating and testing <b>APIs</b> in <b>.NET</b>, developing the front-end in <b>React</b>, deploying <b>CI/CD pipelines</b>, and managing <b>homologation</b> with the client.
                </>
            ),
            logo: process.env.PUBLIC_URL + '/images/companies/btg.png'
        }
    ];

    return (
        <div id="work-experience" className={styles.root}>
            <div className={styles.inner}>
                <h2>Work Experience</h2>
                <div className={styles.onlyMobile}>(scroll row into view for details)</div>

                {experiences.map((exp, index) => (
                    <WorkExperienceRow
                        key={index}
                        company={exp.company}
                        position={exp.position}
                        period={exp.period}
                        location={exp.location}
                        companyLogo={exp.logo}
                        description={exp.description}
                    />
                ))}

                <Margin size={3} />
            </div>
        </div>
    );
};

export default WorkExperience;