import React from 'react';
import styles from './WorkExperience.module.css'
import VerticalFlexboxFix from "./VerticalFlexboxFix";
import WorkExperienceRow from './WorkExperienceRow';
import Margin from '../Margin';

const isMobile = window.innerWidth <= 768;


const WorkExperience = () => (
    <VerticalFlexboxFix width={'55em'}>
        <h2>Work Experience</h2>
        <div className={styles.onlyMobile}>(click row for details)</div>

        <WorkExperienceRow>
            <p>2024/06 - 2024/08 (3mo)</p>
            <p><a href="https://www.linkedin.com/company/btgpactual/posts/?feedView=all" target="_blank">BTG Pactual</a></p>
            <p>Full Stack Intern</p>
            <p>.NET, React, AWS</p>
            <p>Played a part in developing an intranet payment portal. This payment portal was used by the C&P team at the bank to process contracts and payments between the bank and some service providers. I was in charge of developing the “delegate payment” functionality, which included the duty of modifying the database, creating and testing API in .NET, developing the front-end in React, deploying CI/CD pipelines and homologation with client.</p>
        </WorkExperienceRow>

        <Margin size={3}/>

    </VerticalFlexboxFix>
);

export default WorkExperience;