import styles from "./layout.module.css";
export function PixelContainer({
  children,
  className,
  borderTextRight,
  borderTextTop,
}: {
  children: React.ReactNode;
  className?: string;
  borderTextRight?: string;
  borderTextTop?: string;
}) {
  return (
    <div
      className={`${styles.pixelArtBorder} ${styles.container} ${className}`}
    >
      {borderTextRight && (
        <p className={`${styles.pixelArtVerticalTextRight}`}>
          {borderTextRight}
        </p>
      )}
      {borderTextTop && (
        <p className={`${styles.pixelArtVerticalTextTop} ${styles.top}`}>
          {borderTextTop}
        </p>
      )}
      {children}
    </div>
  );
}
