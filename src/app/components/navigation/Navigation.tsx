import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <a className="skip-link sr-text" id="skipToMainLink" href="#main">Skip To Main Content</a>
      <nav aria-label="Main">
        <ul className="top-nav navList">
          <div className="nav-left">
            <li>
              <Link href="/"> HOME </Link>
            </li>
          </div>
          <div className="nav-right">
            <li>
              <Link href="/about">ABOUT</Link>
            </li>
            <li>
              <Link href="/projects">PROJECTS</Link>
            </li>
            <li>
              <Link href="/contact">CONTACT</Link>
            </li>
          </div>

        </ul>
      </nav>
    </>
  );
}
