'use client'
import { SetStateAction, useState } from 'react';
import styles from './MusicTab.module.css';

export default function MusicTab() {
    const musicAlbums = [
        'Rebirth',
        'Banality Of Man',
        'Departum',
    ];
    const [activeMusicAlbum, setActiveMusicAlbum] = useState(musicAlbums[0]);

    const handleMusicAlbumClick = (album: SetStateAction<string>) => {
        setActiveMusicAlbum(album);
    };

    const renderMusicAlbumDetails = () => {
        switch (activeMusicAlbum) {
            case 'Rebirth':
                return <div>Details about 1</div>;
            case 'Banality Of Man':
                return <div>Details about2</div>;
            case 'Departum':
                return <div>Details about 3</div>;
            default:
                return <div>Select an album to see the details.</div>;
        }
    };

    return (
        <div className={styles.musicTabPanel}>
            <div className={styles.musicAlbumList}>
                {musicAlbums.map((album) => (
                    <button
                        key={album}
                        onClick={() => handleMusicAlbumClick(album)}
                        className={album === activeMusicAlbum ? styles.activeMusicAlbum : styles.musicAlbum}
                    >
                        {album}
                    </button>
                ))}
            </div>
            <div className={styles.musicAlbumDetails}>
                {renderMusicAlbumDetails()}
            </div>
        </div>
    );
};
