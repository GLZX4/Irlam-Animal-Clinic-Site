import Link from "next/link";
import { Stethoscope, Award, PoundSterling, Info, User } from "lucide-react";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.headerAlignment}>
      <div  className={styles.logo} />

      <nav className={styles.navBar}>
        <a className={styles.navBarItem}>
          <span>Services</span>
          <Stethoscope size={16} />
        </a>

        <a className={styles.navBarItem}>
          <span>Team</span>
          <Award size={16} />
        </a>

        <a className={styles.navBarItem}>
          <span>Pricing</span>
          <PoundSterling size={16} />
        </a>

        <a className={styles.navBarItem}>
          <span>About</span>
          <Info size={16} />
        </a>

        <a className={styles.navBarItem}>
          <span>Contact</span>
          <User size={16} />
        </a>
      </nav>
    </header>
  );
}