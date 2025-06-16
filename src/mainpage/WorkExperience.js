import React from 'react';
import styles from './WorkExperience.module.css'
import VerticalFlexboxFix from "./VerticalFlexboxFix";
import WorkExperienceRow from './WorkExperienceRow';
import Margin from '../Margin';

const isMobile = window.innerWidth <= 768;

const WorkExperience = () => {
    const experiences = [
        {
            period: '2024/06 - 2024/08 (3mo)',
            company: 'BTG Pactual',
            position: 'Full Stack Intern',
            location: '.NET, React, AWS',
            description: 'Played a part in developing an intranet payment portal. This payment portal was used by the C&P team at the bank to process contracts and payments between the bank and some service providers. I was in charge of developing the "delegate payment" functionality, which included the duty of modifying the database, creating and testing API in .NET, developing the front-end in React, deploying CI/CD pipelines and homologation with client.',
            logo: process.env.PUBLIC_URL + '/images/companies/btg.png'
        }
    ];

    return (
        <div id="work-experience">
            <VerticalFlexboxFix width={'55em'}>
                <h2>Work Experience</h2>
                <div className={styles.onlyMobile}>(click row for details)</div>

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

                <Margin size={3}/>
            </VerticalFlexboxFix>
        </div>
    );
};

export default WorkExperience;