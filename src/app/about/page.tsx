import styles from "./page.module.css"
import type { Metadata } from 'next'

import ThemeSwitcher from '../components/themes/themeSwitcher';

export const metadata: Metadata = {
  title: 'AlphaRedux | About Us',
  description: 'Learn More About Alpha Redux'
}

function About() {
  return (
    <>
      <ThemeSwitcher />
      <main>
        <h1 className={styles.mainPageTitle}> ABOUT ALPHAREDUX</h1>

        <h2 className={styles.level2Heading}>
          Our Mission
        </h2>
        <p className={styles.paragraphUnderH2}>
          AlphaRedux is more than just a company with a single area of expertise; it is a crucible for the future, where the impossible becomes possible. We specialize in developing video games with unique approaches to narrative, breathtakingly realistic graphics and complex, immersive plots that push the boundaries of storytelling. Our music publishing arm defies conventional approaches to music production, creating new rhythms and sounds without relying on traditional music theory and instead relying on raw expression. In our art production arm, we blend use of novel technologies and multilayered narratives to explore new expressions of creativity. Our technology and R&D efforts are focused on pioneering futuristic technologies, exploring uncharted territories that promise to redefine our understanding of what is achievable.
        </p>

        <h2 className={styles.level2Heading}>
          Our Vision
        </h2>
        <p className={styles.paragraphUnderH2}>
          At the heart of AlphaRedux is a vision to challenge and disrupt the status quo. We are not content with following trends or settling for the average. Our goal is to constantly break new ground and challenge conventions, whether it is in the way we develop video games, produce music, create art, or pioneer new technologies. We believe in the power of innovation to change the world, and our work is driven by a passion to create something truly groundbreaking.
        </p>


        <h2 className={styles.level2Heading}>
          Why Alpha Redux
        </h2>
        <p className={styles.paragraphUnderH2}>
          Alpha Redux in its name is an embodiment of a return and reduction to the original state and essence of an object. The purpose of AlphaRedux goes beyond just an amalgamation of varied disciplines; it is more importantly an homage to the renaissance and the tradition of polymaths.
        </p>

        <p className={styles.paragraphUnderH2}>
          Echoing the ethos of our multifaceted ventures in video games, music, art, and technology, we are inspired by the historical titans who mastered the art of weaving together diverse strands of knowledge. These old polymaths did not confine themselves to single disciplines; they roamed freely across the vast landscape of intellect and creativity, proving that excellence, curiosity and intellect knows no boundaries.
        </p>
        <p className={styles.paragraphUnderH2}>
          AlphaRedux embodies a push to embrace multiple fields of study, understanding that the strings of the world are woven from the threads of varied fields of knowledge. AlphaRedux dismisses the modern siloed approach to expertise, knowlegde and promotes a more open method of thinking, learning and pursuing.

          This purpose fuels our quest to challenge the status quo, pushing us to explore the unexplored and create what has yet to be imagined. It is a commitment to the polymathic vision that mastery across domains is not just possible, it is a revisitation to what made us evolve into who we are today.
        </p>
      </main>
    </>
  );
}

export default About