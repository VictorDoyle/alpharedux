import Link from "next/link"
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'AlphaRedux | The Black Dossier',
    description: 'The Black Dossier, A Game By Alpha Redux'
}

export default function TheBlackDossier() {
    return (
        <main>
            <h1>The Black Dossier</h1>
            <h2> Summary of the game</h2>

            <div>
                <p>
                    The Black Dossier immerses players in the grim reality of a detective embroiled in the depths of human depravity, drawing inspiration from the chilling narratives of Hannibal and True Detective. In this harrowing journey, you are the detective, tasked with unraveling the twisted machinations of a serial killer who communicates through cryptic tapes. These tapes are your guide, leading you to remote and often macabre crime scenes, each meticulously staged to convey a fragment of the killers psyche and motive.

                    As the game unfolds, your investigative skills are put to the test. The gameplay hinges on meticulous crime scene analysis, collecting evidence, and piecing together the puzzles left by the killer. Interviews with witnesses and suspects add layers of complexity, requiring you to read between the lines and discern truth from deception. The atmosphere is thick with tension, the narrative steeped in the kind of darkness that fans of Mindhunter will find familiar. Its a game that doesnt just seek to entertain but aims to immerse you in the psychological warfare between detective and killer.

                    The Black Dossier takes you deeper into the abyss as the gameplay progresses. What starts as a single case spirals into a series of black dossiers, each representing a case involving the most notorious and elusive killers. These dossiers are not just assignments; they are a descent into the heart of darkness, reserved for those with the fortitude to confront the very worst of what humanity has to offer.

                    The games somber tone is punctuated by the psychological toll these cases take on the protagonist. The choices you make affect not only the outcome of the investigations but also the mental and emotional state of the detective. The narrative weaves through themes of morality, the human capacity for evil, and the search for justice in a world where it often seems just out of reach.

                    In The Black Dossier, the chase is as much about catching the killer as it is about understanding the nature of evil itself. Its a game that challenges you to look beyond the evidence and question the very nature of guilt and redemption. With each dossier you close, the question remains: in the pursuit of monsters, how close do you come to becoming one yourself?
                </p>
            </div>


            <Link href={'/projects/video-games'}>Back To All Video Games</Link>
        </main>
    )
};