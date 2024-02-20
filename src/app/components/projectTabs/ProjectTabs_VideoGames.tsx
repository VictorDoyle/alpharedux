'use client'
import { SetStateAction, useState } from 'react';
import styles from './VideoGameTab.module.css';
// atomic components for tabpanels
import TowerGameMini from './videoGamesTab_Components/towerGame_mini';
import SevenMinutesGameMini from './videoGamesTab_Components/sevenMinutesGame_mini';
import RebirthGameMini from './videoGamesTab_Components/rebirthGame_mini';
import AnomalyMiniGame from './videoGamesTab_Components/anomalyGame_mini';
import BlackDossierMiniGame from './videoGamesTab_Components/blackDossierGame_mini';


export default function VideoGameTab() {
    const videoGames = ['The Tower', '7 Minutes', 'The Black Dossier', 'The Anomaly', 'Rebirth',];
    const [activeVideoGame, setActiveVideoGame] = useState(videoGames[0]);

    const handleVideoGameClick = (game: SetStateAction<string>) => {
        setActiveVideoGame(game);
    };

    const renderVideoGameDetails = () => {
        switch (activeVideoGame) {
            case 'The Tower':
                return (
                    <>
                        <TowerGameMini />
                    </>
                )
            case '7 Minutes':
                return (
                    <>
                        <SevenMinutesGameMini />
                    </>
                )
            case 'The Black Dossier':
                return (
                    <>
                        <BlackDossierMiniGame />
                    </>
                )
            case 'The Anomaly':
                return (
                    <>
                        <AnomalyMiniGame />
                    </>
                )
            case 'Rebirth':
                return (
                    <>
                        <RebirthGameMini />
                    </>
                )
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