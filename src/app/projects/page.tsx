'use client'
import { useState } from 'react';
import styles from './page.module.css';

export default function Projects() {
    // fallback 2 first one
    const tabs = ['VIDEO GAMES', 'MUSIC', 'TECH', 'R&D', 'ART'];
    const [activeTab, setActiveTab] = useState(tabs[0]);

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    // switch case, cleanup later
    const renderTabContent = () => {
        switch (activeTab) {
            case 'VIDEO GAMES':
                return (
                    <>
                        <h2>New albums coming</h2>
                        <p>Here is text</p>
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
                return <div>Select a tab to see content</div>;
        }
    };

    return (
        <main>
            <h1 className="pageMainTitle"> PROJECTS </h1>

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
        </main>
    );
}
