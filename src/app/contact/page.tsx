import type { Metadata } from 'next'
import styles from './page.module.css'

export const metadata: Metadata = {
    title: 'AlphaRedux | Contact Us',
    description: 'Contact Alpha Redux'
}

export default function Contact() {
    return (
        <main>
            <h1 className={styles.mainPageTitle}> CONTACT </h1>

            <p className={styles.paragraphUnderH2}> Please make sure you follow the email subject guidelines as any email outside of these will be dismissed</p>

            <h2 className={styles.level2Heading}>For Video Game Developers</h2>
            <p className={styles.paragraphUnderH2}> Email alphareduxgaming@gmail.com with the Subject starting with:  AlphaRedux: Gaming Inquiry</p>
            <p className={styles.paragraphUnderH2}> Alternatively, you can <a aria-label='Click this to email Alpha Redux Gaming' className={styles.contactEmailLink} href='mailto:alphareduxgaming@gmail.com?subject=AlphaRedux: Gaming Inquiry'>click this link here</a></p>
            <h2 className={styles.level2Heading}>For Software Developers and Engineers</h2>
            <p className={styles.paragraphUnderH2}> Email alphareduxgaming@gmail.com with the Subject starting with:  AlphaRedux: Tech Inquiry</p>
            <p className={styles.paragraphUnderH2}> Alternatively, you can <a aria-label='Click this to email Alpha Redux Tech' className={styles.contactEmailLink} href='mailto:alphareduxgaming@gmail.com?subject=AlphaRedux: Tech Inquiry'>click this link here</a></p>
            <h2 className={styles.level2Heading}>For R&D Department</h2>
            <p className={styles.paragraphUnderH2}> Email alphareduxgaming@gmail.com with the Subject starting with:  AlphaRedux: Research Inquiry</p>
            <p className={styles.paragraphUnderH2}> Alternatively, you can <a aria-label='Click this to email Alpha Redux Research & Development' className={styles.contactEmailLink} href='mailto:alphareduxgaming@gmail.com?subject=AlphaRedux: Research Inquiry'>click this link here</a></p>
            <h2 className={styles.level2Heading}>For Music Producers</h2>
            <p className={styles.paragraphUnderH2}> Email alphareduxgaming@gmail.com with the Subject starting with:  AlphaRedux: Music Inquiry</p>
            <p className={styles.paragraphUnderH2}> Alternatively, you can <a aria-label='Click this to email Alpha Redux Music' className={styles.contactEmailLink} href='mailto:alphareduxgaming@gmail.com?subject=AlphaRedux: Music Inquiry'>click this link here</a></p>

        </main>
    );
}