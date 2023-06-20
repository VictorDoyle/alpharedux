import Link from "next/link"
import styles from "./components.module.css"

function Footer () {
    
    return (
        <footer className={styles.footerMain}>
            <Link href={"/"} className={styles.footerLogo}>ALPHAREDUX<span className="sr_only_span"> Homepage</span></Link>
            <Link href={"/about"} className={styles.navLinkFooter}>ABOUT</Link>
            <Link href={"/games"} className={styles.navLinkFooter}>GAMES</Link>
            <Link href={"/design"} className={styles.navLinkFooter}>DESIGN</Link>
            <Link href={"/press"} className={styles.navLinkFooter}>PRESS</Link>
            <Link href={"/contact"} className={styles.navLinkFooter}>CONTACT</Link>
            <Link href={"/policies"} className={styles.navLinkFooter}>POLICIES</Link>


        </footer>
    )
  }
  
  export default Footer