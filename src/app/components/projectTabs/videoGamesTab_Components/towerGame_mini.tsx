import Link from 'next/link';
import styles from '../VideoGameTab.module.css'
import { FaWindows } from "react-icons/fa6";

export default function TowerGameMini() {
    return (
        <>
            <h2 className={styles.minifiedGameTitle}> The Tower</h2>
            <p> Release Date: 2024</p>
            <p> Platforms:  <FaWindows /> </p>
            <p> Summary:
                The Tower invites players on a first-person journey of discovery and existential dread, where dreams of falling through a mysterious tower lead to a haunting revelation. Navigate through the levels of the tower, each layer peeling back the fabric of reality, to uncover you a darker secret that may get you questioning your very reality. This game blends the intrigue of dystopian narratives with the personal quest for identity, challenging players to question the nature of existence as they unravel the towers mysteries. The Tower is a narrative-driven exploration of consciousness, technology, and the human condition.
            </p>

            <Link href={'/projects/video-games/the-tower'}>See More Information About The Tower</Link>

        </>
    )
};
