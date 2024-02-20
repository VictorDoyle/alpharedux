'use client'
import { SetStateAction, useState } from 'react';
import styles from './RnDTab.module.css';

export default function RnDTab() {
    const rndTopics = [
        'Black Hole Theory',
        'Energy conservation in sound transference',
        'Advanced Capitalist effect on consumer index',
    ];
    const [activeRndTopic, setActiveRndTopic] = useState(rndTopics[0]);

    const handleRndTopicClick = (topic: SetStateAction<string>) => {
        setActiveRndTopic(topic);
    };

    const renderRndDetails = () => {
        switch (activeRndTopic) {
            case 'Black Hole Theory':
                return <div>Information on Black Hole Theory</div>;
            case 'Energy conservation in sound transference':
                return <div>Details on Energy Conservation in Sound Transference</div>;
            case 'Advanced Capitalist effect on consumer index':
                return <div>Analysis of Advanced Capitalist Effect on Consumer Index</div>;
            default:
                return <div>Select a topic to see the details.</div>;
        }
    };

    return (
        <div className={styles.rndTabPanel}>
            <div className={styles.rndTopicList}>
                {rndTopics.map((topic) => (
                    <button
                        key={topic}
                        onClick={() => handleRndTopicClick(topic)}
                        className={topic === activeRndTopic ? styles.activeTopic : styles.topic}
                    >
                        {topic}
                    </button>
                ))}
            </div>
            <div className={styles.topicDetails}>
                {renderRndDetails()}
            </div>
        </div>
    );
};
