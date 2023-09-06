import { links } from "./links";
import Link from "next/link";

import s from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={s.navbar}>
      <Link href="/" className={s.logo}>
        <span>LogoImg</span>
      </Link>
      <ul className={s.links}>
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
