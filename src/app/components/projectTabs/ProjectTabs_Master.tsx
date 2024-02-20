'use client'
import { useState } from 'react';
import styles from '../../projects/page.module.css';
import VideoGameTab from './ProjectTabs_VideoGames';
import MusicTab from './ProjectTabs_Music';
import TechTab from './ProjectTabs_Tech';
import RnDTab from './ProjectTabs_RnD';
import ArtTab from './ProjectTabs_Art';

const ProjectTabs = () => {
    const tabs = ['VIDEO GAMES', 'MUSIC', 'TECH', 'R&D', 'ART'];
    const [activeTab, setActiveTab] = useState(tabs[0]);

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'VIDEO GAMES':
                return <VideoGameTab />;
            case 'MUSIC':
                return <MusicTab />;
            case 'TECH':
                return <TechTab />;
            case 'R&D':
                return <RnDTab />;
            case 'ART':
                return <ArtTab />;

            default:
                // video games as fallback since [0]
                return <VideoGameTab />;
        }
    };

    return (
        <>
            <div className={styles.tablistContainer}>
                {/* tabs */}
                {/* TODO: Add arrow key loop on tablist buttons for accessibility */}
                <div role="tablist" className={styles.tablist}>
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            role="tab"
                            className={tab === activeTab ? styles.activeTab : styles.tab}
                            onClick={() => handleTabClick(tab)}
                            aria-selected={tab === activeTab}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* tabpanels */}
                <div className={styles.tabPanel}>
                    {renderTabContent()}
                </div>
            </div>
        </>
    );
};

export default ProjectTabs;