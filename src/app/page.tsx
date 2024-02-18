import styles from "./page.module.css";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AlphaRedux | Home',
  description: 'AlphaRedux Homepage'
}

export default function Home() {
  return (
    <>
      <div className={styles.main}>
        <h1 className={styles.largeLogo}> ALPHA REDUX </h1>
      </div>
    </>
  );
}

