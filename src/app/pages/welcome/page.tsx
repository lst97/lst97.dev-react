import {
  PixelContainer,
  PkmBattleLayout,
} from "@/app/components/common/layout/Containers";
import { Dashboard } from "@/app/components/main/Dashboard";
import React from "react";
import styles from "../../components/common/styles/styles.module.css";
import { PkmLink } from "@/app/components/common/Links";
import Image from "next/image";

const Welcome = () => {
  return (
    <Dashboard>
      <div className="flex flex-col">
        <PixelContainer borderTextTop="~/lst97" className="m-4">
          <h1>
            {/* Xterm.js */}
            Text generation script, train an AI to answer questions about myself
          </h1>
        </PixelContainer>
      </div>
      <div className="mx-24 mt-8">
        <div className="flex flex-row gap-8">
          <Image
            src="/me-pixel-art.png"
            alt="Nelson"
            width={300}
            height={300}
            className="rounded-full shadow-lg hover:scale-110 transition duration-0 cursor-pointer object-cover"
          />
          <div className="m-8">
            <p className="text-2xl">
              Hey, I am Nelson from{" "}
              <Image
                src="/hk-flag-pixel-art.png"
                alt={"hk-flag"}
                width={38}
                height={32}
                className="inline-block"
              />{" "}
              <PkmLink href="https://en.wikipedia.org/wiki/Hong_Kong">
                Hong Kong
              </PkmLink>
              . Graduated at{" "}
              <PkmLink href="https://www.deakin.edu.au/">
                Deakin University
              </PkmLink>{" "}
              for a Bachelor of Computer Science. Software engineer hunting for
              exciting programming adventures. In the meantime, I cook up some
              code and learning new things.
            </p>
            <br />
            <p className="text-2xl">Nice to meet you and welcome to my page!</p>
          </div>
        </div>

        {/* CMS data */}
        <PkmBattleLayout direction="left" title="About this site">
          <p>
            This site is built with Next.js, TypeScript, and Tailwind CSS. It is
            hosted on Vercel and the content is managed by custom CMS. This site
            contains:
            <ul className="pl-4 mt-2">
              <li>
                <div>
                  ☆ A portfolio of some {` `}
                  <PkmLink href="/pages/projects">Projects</PkmLink>
                </div>
              </li>
              <li>
                <div>
                  ☆ Some {` `}
                  <PkmLink href="/pages/resources">Resources</PkmLink> {` `}
                  that I found useful
                </div>
              </li>
              <li>
                <div>
                  ☆ More thing described {` `}
                  <PkmLink href="/pages/resources">About Me</PkmLink>
                </div>
              </li>
            </ul>
          </p>
        </PkmBattleLayout>
        <PkmBattleLayout direction="right" title="About me">
          <p>
            My name is Nelson, a software engineer with a passion for web
            development and programming. I have experience in developing web
            applications and working with various technologies.
          </p>
          <br />
          <p>
            Currently I am working on a private project{" "}
            <PkmLink href="https://gitlab.com/lst97">Conndy</PkmLink> and a side
            project{" "}
            <PkmLink href="https://github.com/lst97/project-st-zita-frontend">
              Project ST Zita
            </PkmLink>
            , in the mean while looking for any job opportunities.
          </p>
        </PkmBattleLayout>
      </div>

      <div className="flex flex-row">
        <div className="basis-1/4"> content</div>
        <div className="basis-3/4">
          PKM health divider - Cards to show what I have made
        </div>
      </div>
    </Dashboard>
  );
};

export default Welcome;
