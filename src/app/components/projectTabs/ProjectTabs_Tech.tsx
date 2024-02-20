'use client'
import { SetStateAction, useState } from 'react';
import styles from './TechTab.module.css';

export default function TechTab() {
    const techIdeas = ['My Next Coffee', 'Accessibility Captcha', 'Encyclopedia Builder', 'Language Analyser'];
    const [activeTechIdea, setActiveTechIdea] = useState(techIdeas[0]);

    const handleTechTabClick = (techIdea: SetStateAction<string>) => {
        setActiveTechIdea(techIdea);
    };

    const renderTechTabDetails = () => {
        switch (activeTechIdea) {
            case 'My Next Coffee':
                return <div>My Next Coffee App, built in SWIFT and available on iOS.</div>;
            case 'Encyclopedia Builder':
                return <div>Encyclopedia Builder</div>;
            case 'Accessibility Captcha':
                return <div>Accessibility Captcha</div>;
            case 'Language Analyser':
                return <div>Leveraging Language-Games proposed by Wittgenstein,</div>;
            default:
                return <div>Select a Tech project to see more information.</div>;
        }
    };

    return (
        <div className={styles.techTabPanel}>
            <div className={styles.techIdeaList}>
                {techIdeas.map((techIdea) => (
                    <button
                        key={techIdea}
                        onClick={() => handleTechTabClick(techIdea)}
                        className={techIdea === activeTechIdea ? styles.activeTechIdea : styles.techIdea}
                    >
                        {techIdea}
                    </button>
                ))}
            </div>
            <div className={styles.techIdeaDetails}>
                {renderTechTabDetails()}
            </div>
        </div>
    );
};