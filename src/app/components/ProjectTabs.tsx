'use client'
import { useState } from 'react';
import styles from '../projects/page.module.css';

const ProjectTabs = () => {
    const tabs = ['VIDEO GAMES', 'MUSIC', 'TECH', 'R&D', 'ART'];
    const [activeTab, setActiveTab] = useState(tabs[0]);

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'VIDEO GAMES':
                return (
                    <>
                        <h2>New video games coming</h2>
                        <p>Here is example</p>
                    </>
                );
            case 'MUSIC':
                return (
                    <>
                        <h2>New albums coming</h2>
                        <p>Here is text</p>
                    </>
                );
            default:
                return <div> add fallback tab heere</div>;
        }
    };

    return (
        <>
            {/* Tabs */}
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

            {/* Tabpanels */}
            <div className={styles.tabPanel}>
                {renderTabContent()}
            </div>
        </>
    );
};

export default ProjectTabs;