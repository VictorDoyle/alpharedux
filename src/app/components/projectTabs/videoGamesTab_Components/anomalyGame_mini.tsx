import Link from 'next/link';
import styles from '../VideoGameTab.module.css'
import { FaWindows } from "react-icons/fa6";

export default function AnomalyMiniGame() {
    return (
        <>
            <h2 className={styles.minifiedGameTitle}> The Anomaly</h2>
            <p> Release Date: To Be Announced </p>
            <p> Platforms:  <FaWindows /> </p>
            <p> Summary:
                Dive into the heart of The Anomaly, a game set in a future where the boundaries between reality and the future of technological advancements blur. As an intelligence officer, you are sent to investigate a mysterious tech company and its secret operations, only to find yourself trapped in a loop of alternate timelines. With futuristic weaponry and the choice between harnessing temporal powers or relying on high-tech gadgets, you must navigate through layers of conspiracies to uncover the truth. This game combines military strategy with speculative fiction, challenging players to dismantle a shadowy government division before the world succumbs to technological corruption.</p>

            <Link href={'/projects/video-games/the-tower'}>See More Information About The Anomaly</Link>

        </>
    )
};
