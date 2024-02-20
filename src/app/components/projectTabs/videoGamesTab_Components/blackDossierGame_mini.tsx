import Link from 'next/link';
import styles from '../VideoGameTab.module.css'
import { FaBookOpen, FaWindows } from "react-icons/fa6";
import Image from 'next/image';


// max 4 images always maybe 3
const blackDossierPreviewImgs = [
    { src: '/art_assets/artAsset_GameStoryboard.jpg', alt: 'Description of Image 1' },
    { src: '/art_assets/artAsset_GameStoryboard.jpg', alt: 'Description of Image 2' },
    { src: '/art_assets/artAsset_GameStoryboard.jpg', alt: 'Description of Image 3' },
    { src: '/art_assets/artAsset_GameStoryboard.jpg', alt: 'Description of Image 4' },
];

export default function BlackDossierMiniGame() {
    return (
        <>
            <h2 className={styles.minifiedGameTitle}> The Black Dossier</h2>
            <p> Release Date: To Be Announced </p>
            <p> Platforms:  <FaWindows /> <FaBookOpen /> </p>
            <p> Summary:
                Step into the shoes of a detective navigating the dark corridors of the human psyche, tracking a serial killer through cryptic tapes that lead you to uncover a greater darkness. The more you investigate, the more you find yourself drawn into a series of increasingly sinister cases. As you delve deeper, youre tasked with solving mysteries that probe the nature of evil, challenging your morality and determination. The Black Dossier is not just a quest for justice; its an exploration into the darkness that dwells within, and the price of confronting it.
            </p>

            {blackDossierPreviewImgs.map((image, index) => (
                <div key={index} className={styles.galleryItem}>
                    <Image width={150} height={150} src={image.src} alt={image.alt} className={styles.galleryImage} />
                </div>
            ))}

            <Link href={'/projects/video-games/the-tower'}>See More Information About The Black Dossier</Link>

        </>
    )
};
