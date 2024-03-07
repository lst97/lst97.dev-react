import { PkmLink } from "../Links";
import { PixelContainer } from "../layout/Containers";

export function NoteItem({
  title,
  date,
  href,
}: {
  title: string;
  date: string;
  href?: string;
}) {
  return (
    <PkmLink
      href={`${href ?? "#"}`}
      className="flex flex-row items-center justify-center px-4 py-2 hover:text-sky-600 hover:bg-amber-100 first:rounded-t-md last:rounded-b-md"
    >
      <div className="basis-3/4 text-start text-inherit">{title}</div>
      <div
        className="basis-1/4 text-end text-inherit"
        style={{ fontWeight: "normal", fontStyle: "italic" }}
      >
        {date}
      </div>
    </PkmLink>
  );
}

import { ReactNode } from "react";

export function NoteList({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <PixelContainer className="mx-16">
      <div className={`${className}`}>{children}</div>
    </PixelContainer>
  );
}
