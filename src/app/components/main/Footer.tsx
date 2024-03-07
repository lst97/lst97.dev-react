import { PkmLink } from "../common/Links";
import { PixelContainer } from "../common/layout/Containers";
import ChromeDinoGame from "../utils/ChromeGames";

export function Footer({
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <PixelContainer className={`${className} bg-amber-100 p-4`}>
      <div className="flex flex-row space-x-4 w-full justify-between">
        <div className="flex flex-col">
          <div className="flex flex-row space-x-4 basis-3/4">
            <PkmLink href="#">
              <p className="inline">Home</p>
            </PkmLink>
            <PkmLink href="#">
              <p className="inline">Resources</p>
            </PkmLink>
            <PkmLink href="#">
              <p className="inline">Notes</p>
            </PkmLink>
            <PkmLink href="#">
              <p className="inline">Software</p>
            </PkmLink>
            <PkmLink href="#">
              <p className="inline">About</p>
            </PkmLink>
          </div>
          <div>Guest Book</div>
          <div>Email</div>
        </div>
        <div className="flex flex-col basis-1/4">Right</div>
      </div>
      <footer>
        <div>
          <p>© 2024 lst97.dev</p>
        </div>
      </footer>
      {/* There is some issue on the component, fix later */}
      {/* <ChromeDinoGame /> */}
    </PixelContainer>
  );
}
