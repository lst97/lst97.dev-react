/* eslint-disable @next/next/no-img-element */
import { PixelContainer } from "./layout/Containers";
import styles from "./card.module.css";
import Link from "next/link";
export function PkmCard({
  children,
  title,
  description,
  src,
}: {
  children?: React.ReactNode;
  title: string;
  description: string;
  src?: string;
}) {
  return (
    <div className="rounded-md shadow ">
      <div className="flex flex-col">
        <div className="relative h-80 overflow-clip w-full">
          <img
            className="bg-amber-100 rounded-t-xl object-cover h-80 w-full hover:scale-125 transition duration-0 cursor-pointer "
            src={src ?? "/default-image.svg"}
            alt={title}
          />

          <div className="absolute bottom-0 right-0 text-center">
            <PixelContainer className={`p-2 ${styles.defaultBackgroundColor}`}>
              <div className="title font-bold text-lg">{title}</div>
              <div className="description italic font-light text-gray-600">
                {description}
              </div>
            </PixelContainer>
          </div>
        </div>
        <PixelContainer>
          <div className="basis-1/2 m-4">{children}</div>
        </PixelContainer>
      </div>
    </div>
  );
}

export function PkmCardLite({
  title,
  src,
  href,
}: {
  title: string;
  src?: string;
  href?: string;
}) {
  return (
    <Link href={href ?? "#"}>
      <div className="rounded-md shadow-md group">
        <div className="flex flex-col">
          <div className="relative h-40 overflow-clip w-full">
            <img
              className="absolute bg-amber-100 rounded-xl object-cover h-40 w-full hover:scale-125 transition duration-0 cursor-pointer "
              src={src ?? "/default-image.svg"}
              alt={title}
            />
            <div className="absolute pointer-events-none transform-gpu translate-x-1/2 translate-y-1/2 bottom-1/2 right-1/2 text-center hidden group-hover:block">
              <PixelContainer className={`p-2 bg-amber-100 bg-opacity-90`}>
                <div className="title font-bold text-lg">{title}</div>
              </PixelContainer>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
