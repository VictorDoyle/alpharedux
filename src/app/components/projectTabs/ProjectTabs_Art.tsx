
import React from 'react';
import styles from './ArtTab.module.css';
import Image from 'next/image';

const imageGallery = [
    { src: '/art_assets/artAsset_GameStoryboard.jpg', alt: 'Description of Image 1' },
    { src: '/art_assets/artAsset_GameStoryboard.jpg', alt: 'Description of Image 1' },
    { src: '/art_assets/artAsset_GameStoryboard.jpg', alt: 'Description of Image 1' },
    { src: '/art_assets/artAsset_GameStoryboard.jpg', alt: 'Description of Image 1' },
    { src: '/art_assets/artAsset_GameStoryboard.jpg', alt: 'Description of Image 1' },
    { src: '/art_assets/artAsset_GameStoryboard.jpg', alt: 'Description of Image 1' },
    { src: '/art_assets/artAsset_GameStoryboard.jpg', alt: 'Description of Image 1' },
    { src: '/art_assets/artAsset_GameStoryboard.jpg', alt: 'Description of Image 1' },
    { src: '/art_assets/artAsset_GameStoryboard.jpg', alt: 'Description of Image 1', },
];

export default function ArtTab() {
    return (
        <div className={styles.gallery}>
            {imageGallery.map((image, index) => (
                <div key={index} className={styles.galleryItem}>
                    <Image width={300} height={300} src={image.src} alt={image.alt} className={styles.galleryImage} />
                </div>
            ))}
        </div>
    );
}