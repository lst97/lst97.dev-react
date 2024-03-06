// components/Navbar.js
import styles from "./navbar.module.css";
import Image from "next/image";
import { PixelContainer } from "../common/layout/Containers";
import { PkmLink } from "../common/Links";
import { AsciiTextGenerator } from "../common/generators/Ascii.jsx";

function Navbar() {
  return (
    <PixelContainer borderTextRight="Navigation" className="basis-1/5">
      <nav className={`${styles.navbarLayout}`}>
        <div className="flex flex-col w-full">
          <div className={styles.navbarLogo}>
            <AsciiTextGenerator text="LST97" />
          </div>
          <ul className={styles.navbarItems}>
            <li>
              <PixelContainer className="bg-amber-100 w-full text-center py-4">
                <PkmLink href="/pages/welcome" className={styles.navbarItem}>
                  HOME
                </PkmLink>
              </PixelContainer>
            </li>
            <li>
              <PixelContainer className="bg-amber-100 w-full text-center py-4">
                <PkmLink
                  href="/pages/resources"
                  className={`${styles.navbarItem}`}
                >
                  RESOURCES
                </PkmLink>
              </PixelContainer>
            </li>
            <li>
              <PixelContainer className="bg-amber-100 w-full text-center py-4">
                <PkmLink href="/pages/projects" className={styles.navbarItem}>
                  PROJECTS
                </PkmLink>
              </PixelContainer>
            </li>
            <li>
              <PixelContainer className="bg-amber-100 w-full text-center py-4">
                <PkmLink href="/pages/about" className={styles.navbarItem}>
                  ABOUT
                </PkmLink>
              </PixelContainer>
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
