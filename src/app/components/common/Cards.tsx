import Image from "next/image";
import { PixelContainer } from "./layout/Containers";
import styles from "./card.module.css";
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
    <div className="rounded-md shadow-md ">
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
