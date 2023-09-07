import { links } from "./links";
import Link from "next/link";

import s from "./navbar.module.css";
import Image from "next/image";
import DarkMode from "../DarkMode";

const Navbar = () => {
  return (
    <nav className={s.navbar}>
      <Link href="/" className={s.logo}>
        <span className={s.logoImg}><Image src={'/next-js.svg'} alt="Logo next.js" width={40} height={40}/></span>
      </Link>
      <ul className={s.links}>
        <DarkMode />
        {links.map((link) => {
          return (
            <Link key={link.id} href={link.link}>
              <li className={s.link}>{link.name}</li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
