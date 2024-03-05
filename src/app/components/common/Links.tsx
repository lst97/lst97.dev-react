import Link from "next/link";
import styles from "../../components/common/styles/styles.module.css";

export function PkmLink({
  children,
  href,
  className,
}: {
  children?: React.ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <Link href={href} className={`${styles.pkmLink} ${className}`}>
      {children}
    </Link>
  );
}
