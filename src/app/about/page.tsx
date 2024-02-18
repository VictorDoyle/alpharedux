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
      <main className={styles.description}>
        <h1 className={styles.mainPageTitle}> ABOUT ALPHAREDUX</h1>
      </main>
    </>
  );
}

export default About