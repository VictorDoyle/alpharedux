'use client'
import { useTheme } from 'next-themes';
import { useEffect } from 'react';
import styles from "./page.module.css"

export default function About() {
  const { setTheme, theme } = useTheme();
  useEffect(() => {
    setTheme('light');
    // unmount revert to dark 
    return () => {
      setTheme('dark');
    };
  }, [setTheme]);

  return (
    <>
      <main className={styles.description}>
        <h1> About us</h1>
      </main>
    </>
  );
}
