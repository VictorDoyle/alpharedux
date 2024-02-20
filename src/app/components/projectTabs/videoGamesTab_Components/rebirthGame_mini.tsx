import Link from 'next/link';
import styles from '../VideoGameTab.module.css'
import { FaWindows } from "react-icons/fa6";

export default function RebirthGameMini() {
    return (
        <>
            <h2 className={styles.minifiedGameTitle}> Rebirth</h2>
            <p> Release Date: To Be Announced </p>
            <p> Platforms:  <FaWindows /> </p>
            <p> Summary:
                Rebirth plunges players into a dystopian world where life and social status are dictated by likes, chaos and a false sense of regenation. As you journey from tribal villages to a neon-soaked metropolis, you uncover a conspiracy that challenges the very fabric of society. With satirical jabs at the deliriousness of consumerism and a narrative that twists through past lives and corporate deceit, Rebirth is a game that questions what it means to live in a world where worth is measured in social currency and conformity. Your choices will determine the fate of the city and reveal the true cost of immortality in a system designed to suppress individuality.
            </p>

            <Link href={'/projects/video-games/the-tower'}>See More Information About Rebirth, The Game</Link>

        </>
    )
};
