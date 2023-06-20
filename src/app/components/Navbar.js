import Link from "next/link"
import styles from "./components.module.css"

function Navbar () {
    /* add aria-current page logic + active link */
    return (
        <nav aria-label="Main" className={styles.mainNavigation}>
            <div className={styles.topLeft}>
                <Link href={"/"} className={styles.navLogo}>ALPHAREDUX<span className="sr_only_span"> Homepage</span></Link>
            </div>
            <div className={styles.topRight}>
                <Link href={"/about"} className={styles.navLink}>ABOUT</Link>
                <Link href={"/games"} className={styles.navLink}>GAMES</Link>
                <Link href={"/design"} className={styles.navLink}>DESIGN</Link>
            </div>


        </nav>
    )
  }
  
  export default Navbar