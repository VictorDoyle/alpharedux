import Link from "next/link";

export default function Footer() {
  return (
   <footer>
    <nav aria-label="Footer">
        <ul>
        <li>
          <Link href="/"> Home </Link>
        </li>
            <li>
            <Link href="/about">About</Link>        </li>
            <li>
            <Link href="/projects">Projects</Link>   
            </li>
        </ul>
    </nav>

    <nav aria-label="Social Links">
      <a href="https://twitter.com/_alpharedux_"> X/Twitter </a>
      <a href="https://www.instagram.com/alpharedux"> Insta</a>
    </nav>

   </footer>
  );
}
