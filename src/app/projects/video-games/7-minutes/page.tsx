import Link from "next/link"
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'AlphaRedux | 7 Minutes',
    description: '7 Minutes, The Game By Alpha Redux'
}

export default function SevenMinutes() {
    return (
        <main>
            <h1>7 Minutes</h1>
            <h2> Summary of the game</h2>

            <div>
                <p>
                    7 Minutes is a dark and immersive horror game that invites players into the introspective journey of reliving the last seven minutes of life, but in an extended, surreal experience across various chapters. Each chapter unfolds in unique settings from the protagonists past lives, now seen through the haunting lens of the spirit world. This eerie realm is populated by spirits that interact with the player in myriad ways, from misleading tricks to guiding lights, leading them to confront their own mortality and seek closure.

                    The games narrative structure is a mosaic of different lives, each chapter focusing on a new characters final moments. These stories are diverse, ranging from a detective investigating a cold case to an ordinary individual returning home from work, with each scenario diving deep into personal tragedies and dark secrets. The constant across these chapters is the discovery of a cleanser, a symbolic object or realization that allows the character to acknowledge their death and find peace.

                    7 Minutes distinguishes itself with its approach to time and perception. What should only last seven minutes stretches far beyond, altering players sense of reality and immersing them in a deeply psychological and paranormal experience. This manipulation of time serves not just as a gameplay mechanic but as a narrative tool, emphasizing the profound and often unsettling reflection on lifes final moments.

                    Horror in 7 Minutes is not just about the fear of the unknown but also the terror of whats painfully familiar. The game masterfully blends the ordinary with the otherworldly, creating a rich, atmospheric tension that pervades each chapter. With its innovative narrative and haunting gameplay, 7 Minutes offers a reflective exploration of the human psyche, the inevitability of death, and the possibility of finding solace in the afterlife.
                </p>
            </div>


            <Link href={'/projects/video-games'}>Back To All Video Games</Link>
        </main>
    )
};