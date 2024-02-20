'use client'
import { SetStateAction, useState } from 'react';
import styles from './VideoGameTab.module.css';

export default function VideoGameTab() {
    const videoGames = ['The Tower', '7 Minutes', 'The Black Dossier', 'The Anomaly', 'Rebirth',];
    const [activeVideoGame, setActiveVideoGame] = useState(videoGames[0]);

    const handleVideoGameClick = (game: SetStateAction<string>) => {
        setActiveVideoGame(game);
    };

    const renderVideoGameDetails = () => {
        switch (activeVideoGame) {
            case 'The Tower':
                return <div>The tower game</div>;
            case '7 Minutes':
                return <div>7 Minutes Game</div>;
            case 'The Black Dossier':
                return <div> The Black Dossier </div>;
            case 'The Anomaly':
                return <div>The Anomaly</div>;
            case 'Rebirth':
                return <div>Rebirth Game</div>;
            default:
                return <div>Select a game to see the details.</div>;
        }
    };

    return (
        <div className={styles.videoGameTabPanel}>
            <div className={styles.videoGameList} role='tablist'>
                {videoGames.map((game) => (
                    <button
                        key={game}
                        onClick={() => handleVideoGameClick(game)}
                        className={game === activeVideoGame ? styles.activeGame : styles.game}
                        role='tab'
                    >
                        {game}
                    </button>
                ))}
            </div>
            <div className={styles.gameDetails}>
                {renderVideoGameDetails()}
            </div>
        </div>
    );
};