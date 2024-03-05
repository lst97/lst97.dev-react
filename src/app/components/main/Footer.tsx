import { PixelContainer } from "../common/layout/Containers";
import styles from "./footer.module.css";

export function Footer({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <PixelContainer borderTextTop="Footer" className={`${className}`}>
      {children}
      <footer>
        <div>
          <p>© 2024 lst97.dev</p>
        </div>
      </footer>
    </PixelContainer>
  );
}
