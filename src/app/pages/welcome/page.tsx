/* eslint-disable @next/next/no-img-element */
import {
  PixelContainer,
  PkmBattleLayout,
} from "@/app/components/common/layout/Containers";
import { Dashboard } from "@/app/components/main/Dashboard";
import React from "react";
import { PkmLink } from "@/app/components/common/Links";
import Image from "next/image";
import { PkmCard, PkmCardLite } from "@/app/components/common/Cards";

import dynamic from "next/dynamic";
import { NoteItem, NoteList } from "@/app/components/common/items/Notes";

const DynamicTerminal = dynamic(
  () => import("@/app/components/common/terminal/Terminal"),
  {
    loading: () => <img src="/loading-pixel-art.gif" />,
    ssr: false,
  }
);

const Welcome = () => {
  return (
    <Dashboard>
      <div className="flex flex-col justify-center items-center m-8 px-12">
        <PixelContainer className=" flex flex-col justify-center items-center bg-amber-100">
          <div className="border-b-2 border-black w-full text-center">
            Text generation script, train an AI to answer questions about myself
          </div>
          <div className="rounded-b-md shadow-md">
            <DynamicTerminal />
          </div>
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

      <div className="flex items-center justify-center mb-6 mt-8">
        <PixelContainer className="p-4 w-2/4 shadow-md">
          <p className="text-center italic font-bold">
            Something I have made \̅_̅/̷̚ʾ
          </p>{" "}
        </PixelContainer>
      </div>

      <div className="grid grid-cols-2 gap-16 px-16">
        <PkmCard title={"Test"} description={"2018 * this is a test"}>
          <p>This is a test</p>
        </PkmCard>

        <PkmCard title={"Test"} description={"2018 * this is a test"}>
          <p>This is a test</p>
        </PkmCard>
      </div>
      <br />

      <div className="flex items-center justify-center mb-6 mt-8">
        <PixelContainer className="p-4 w-2/4 shadow-md">
          <p className="text-center">
            <img
              className="inline-block h-7 w-7"
              alt="👀"
              src="data:image/png;base64,R0lGODlhDgAPAKIEAMzMmWZmZv///wAAAP///wAAAAAAAAAAACH5BAEAAAQALAAAAAAOAA8AAAMwSLrc/hCO0SYbQlCFNc8Z1YUE1okaOaWi6U1rG5fBELz1vQWAp/A+zmZhiRiPSEUCADs="
            />{" "}
            <p className="italic inline font-bold">Latest Notes</p>
          </p>
        </PixelContainer>
      </div>
      <NoteList className="grid grid-cols-1 divide-y divide-gray-400">
        <NoteItem title="Test" date="1 Mar 2024" />
        <NoteItem title="Test" date="1 Mar 2024" />
        <NoteItem title="Test" date="1 Mar 2024" />
      </NoteList>
      <br />
      <div className="flex items-center justify-center mb-6 mt-8">
        <PixelContainer className="p-4 w-2/4 shadow-md">
          <p className="text-center italic font-bold">
            From the lab - EXPERIMENTAL{" "}
            <img
              className="inline-block h-6 w-7"
              alt="☣️"
              src="/radioactive-pixel-art.png"
            />
          </p>
        </PixelContainer>
      </div>

      <div className="grid grid-cols-3 gap-8 px-16">
        <PkmCardLite title={"Test but a little bit long"} />
        <PkmCardLite title={"Test"} />
        <PkmCardLite title={"Test"} />
      </div>

      <div className="grid grid-cols-2 gap-4 m-16">
        <PixelContainer className="h-60">
          <p>Local time</p>
        </PixelContainer>
        <PixelContainer>
          <p>Code activity</p>
        </PixelContainer>
        <PixelContainer>
          <p className="h-60">Visit Counter</p>
        </PixelContainer>
        <PixelContainer>
          <p>More</p>
        </PixelContainer>
      </div>
    </Dashboard>
  );
};

export default Welcome;
