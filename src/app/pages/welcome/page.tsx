import {
  PixelContainer,
  PkmBattleLayout,
} from "@/app/components/common/layout/Containers";
import { Dashboard } from "@/app/components/main/Dashboard";
import React from "react";
import { PkmLink } from "@/app/components/common/Links";
import Image from "next/image";
import { PkmCard } from "@/app/components/common/Cards";

import dynamic from "next/dynamic";

const DynamicTerminal = dynamic(
  () => import("@/app/components/common/terminal/Terminal"),
  {
    loading: () => <img src="/loading-pixel-art.gif" className="w-full" />,
    ssr: false,
  }
);

const Welcome = () => {
  return (
    <Dashboard>
      <div className="flex flex-col">
        <PixelContainer className="m-4">
          <h1>
            Text generation script, train an AI to answer questions about myself
            <div className="w-3/4 overflow-clip rounded-md shadow-md m-4 ">
              <DynamicTerminal />
            </div>
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

      <div className="grid grid-cols-2 gap-32 p-16">
        <PkmCard title={"Test"} description={"2018 * this is a test"}>
          <p>This is a test</p>
        </PkmCard>

        <PkmCard title={"Test"} description={"2018 * this is a test"}>
          <p>This is a test</p>
        </PkmCard>
      </div>
    </Dashboard>
  );
};

export default Welcome;
