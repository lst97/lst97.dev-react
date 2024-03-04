// components/Navbar.js
import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";
import { PixelContainer } from "../common/layout/Containers";

function Navbar() {
  return (
    <PixelContainer borderTextRight="Navigation" className="basis-1/4">
      <nav className={`${styles.navbarLayout}`}>
        <div className={styles.navbarLogo}>
          <Image src="" alt="Logo" />
        </div>
        <ul className={styles.navbarItems}>
          <li>
            <Link href="/pages/welcome" className={styles.navbarItem}>
              HOME
            </Link>
          </li>
          <li>
            <Link href="/pages/resources" className={styles.navbarItem}>
              RESOURCES
            </Link>
          </li>
          <li>
            <Link href="/pages/projects" className={styles.navbarItem}>
              PROJECTS
            </Link>
          </li>
          <li>
            <Link href="/pages/about" className={styles.navbarItem}>
              ABOUT
            </Link>
          </li>
        </ul>
      </nav>
    </PixelContainer>
  );
}

export default Navbar;
