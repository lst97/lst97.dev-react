// components/Navbar.js
import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";
import { PixelContainer } from "../common/layout/Containers";

function Navbar() {
  return (
    <PixelContainer borderTextRight="Navigation" className="basis-1/4">
      <nav className={`${styles.navbarLayout}`}>
        <div className="flex flex-col">
          <div className={styles.navbarLogo}>
            <Image
              src="/ascii_icon.png"
              alt="Logo"
              width={200}
              height={200}
              className="shadow-lg cursor-pointer object-cover m-8"
            />
            {"TO BE REPLACED BY PIXEL ART GENERATOR"}
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
        </div>

        <div>
          <Image
            src="/maintain.gif"
            alt="Under construction"
            width={200}
            height={200}
          />
        </div>
      </nav>
    </PixelContainer>
  );
}

export default Navbar;
