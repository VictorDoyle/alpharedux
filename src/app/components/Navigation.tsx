import Link from "next/link";

export default function Navigation() {
  return (
   <>
   <nav>
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
   </>
  );
}
