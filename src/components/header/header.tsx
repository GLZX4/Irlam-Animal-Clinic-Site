import Link from "next/link";
import { Stethoscope, Award, Info, User } from "lucide-react";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.headerAlignment}>
  
      <Link href="/" className={styles.logo}></Link>

      <nav className={styles.navBar}>

        <Link href="/team" className={styles.navBarItem}>
          <span>Team</span>
          <Award size={16} />
        </Link>

        <Link href="/services" className={styles.navBarItem}>
            <span>Services</span>
            <Stethoscope size={16} />
        </Link>

        <Link href="/about" className={styles.navBarItem}>
          <span>About</span>
          <Info size={16} />
        </Link>

        <Link href="/contact" className={styles.navBarItem}>
          <span>Contact</span>
          <User size={16} />
        </Link>
      </nav>
    </header>
  );
}