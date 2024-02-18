'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const allPossibleMsgs = [
    'We strive to build unique and novel experiences. We are Alpha Redux',
    'AlphaRedux is built as a returnal to the roots of something lost. An edge to creativity that goes beyond.',
    'Redefining possibilities in technology, Alpha Redux is where technology meets imagination.',
    'Alpha Redux is looking to build a new generation of independent game development. Take a look at the Projects Page',
    'Where others see limits, Alpha Redux sees challenges.',
    'The next digital frontier is here, Alpha Redux wants to hit the ground running.',
    'Mundus Vult Decipi.',
    'From music to video game development, the technological means we specialize in are constantly growing.',
    'Our goal is to craft experiences and products that transcend the norm.'
  ];

  const [randomMsg, setRandomMsg] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    const getRandomMsg = () => {
      const randomIndex = Math.floor(Math.random() * allPossibleMsgs.length);
      return allPossibleMsgs[randomIndex];
    };
    setRandomMsg(getRandomMsg());
  }, [pathname]);

  return (
    <footer>
      <p className="footer-randomText"> {randomMsg} </p>

      {/* back 2 top */}
      <button className="back-to-top">
        Back To Top
      </button>

      {/* social links  */}
      <SocialLinks />
    </footer>
  );
}
