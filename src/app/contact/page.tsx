import type { Metadata } from 'next'
import styles from './page.module.css'

export const metadata: Metadata = {
    title: 'AlphaRedux | Contact Us',
    description: 'Contact Alpha Redux'
}

export default function Contact() {
    return (
        <>
            <h1 className={styles.mainPageTitle}> CONTACT </h1>
        </>
    );
}