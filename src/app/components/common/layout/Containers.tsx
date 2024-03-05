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

export function PkmStatusContainer({
  title,
  direction,
}: {
  title: string;
  direction: "left" | "right";
}) {
  return (
    <div className="m-4">
      <div
        className={`${
          direction === "left"
            ? styles.pkmHealthContainerLeft
            : styles.pkmHealthContainerRight
        } w-full`}
      >
        <span className={`${styles.pkmHealthContainerTitle}`}>{title}</span>
      </div>
    </div>
  );
}

export function PkmBattleLayout({
  children,
  direction,
  title,
}: {
  children: React.ReactNode;
  direction: "left" | "right";
  title: string;
}) {
  return (
    <div className="flex flex-row items-center">
      {direction === "left" && <div className="m-8"> {children}</div>}

      <div className="basis-1/2">
        <PkmStatusContainer
          direction={direction}
          title={title}
        ></PkmStatusContainer>
      </div>

      {direction === "right" && <div className="m-8"> {children}</div>}
    </div>
  );
}
