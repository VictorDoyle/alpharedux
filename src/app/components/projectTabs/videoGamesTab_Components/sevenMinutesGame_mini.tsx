import Link from 'next/link';
import styles from '../VideoGameTab.module.css'
import { FaWindows, FaXbox } from "react-icons/fa6";

export default function SevenMinutesGameMini() {
    return (
        <>
            <h2 className={styles.minifiedGameTitle}> 7 Minutes</h2>
            <p> Release Date: 2025</p>
            <p> Platforms:  <FaWindows />  <FaXbox /> </p>
            <p> Summary:

                7 Minutes is a first person horor game that offers a profound narrative. Each chapter unveils a new story, rich with personal tragedies and dark secrets, set against the backdrop of familiar settings now haunted by otherworldly presences. Through the eerie journey of seeking symbolic cleansers to acknowledge death and find peace, the game weaves a complex choice driven narrative based on human emotion, mortality, and the quest for closure. 7 Minutes is an atmospheric exploration of the finality of life and the unsettling beauty of its end, presented through a lens of surreal horror and psychological depth.
            </p>

            <Link href={'/projects/video-games/the-tower'}>See More Information About 7 Minutes, The Game</Link>
        </>
    )
};
