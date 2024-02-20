import Link from "next/link"
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'AlphaRedux | Video Game Projects',
    description: 'Current Video Projects By Alpha Redux'
}
export default function VideoGames() {
    return (
        <>
            <h1>VIDEO GAMES</h1>

            <h2>
                <Link href={'/projects/video-games/the-tower'}>The Tower</Link>
            </h2>

            <h2>
                <Link href={'/projects/video-games/7-minutes'}>7 Minutes</Link>
            </h2>

            <h2>
                <Link href={'/projects/video-games/the-black-dossier'}>The Black Dossier</Link>
            </h2>

            <h2>
                <Link href={'/projects/video-games/the-anomaly'}>The Anomaly</Link>
            </h2>

            <h2>
                <Link href={'/projects/video-games/rebirth'}>Rebirth</Link>
            </h2>


        </>
    );
}