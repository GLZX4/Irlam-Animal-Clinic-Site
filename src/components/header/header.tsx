"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./header.module.scss";

import { Menu, X, Users, PawPrint, CircleHelp, UserRound } from "lucide-react";



export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 430) {
                setMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header className={styles.header}>

            <div className={styles.headerAlignment}>

                <Link href="/" className={styles.logo} />

                <button
                    className={styles.menuButton}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                >
                    {menuOpen ? <X size={28}/> : <Menu size={28}/>}
                </button>

                <nav className={`${styles.navBar} ${menuOpen ? styles.open : ""}`}>
                    <Link href="/team" className={styles.navBarItem}>
                        <span>Team</span>
                        <Users />
                    </Link>

                    <Link href="/services" className={styles.navBarItem}>
                        <span>Services</span>
                        <PawPrint />
                    </Link>

                    <Link href="/about" className={styles.navBarItem}>
                        <span>About</span>
                        <CircleHelp />
                    </Link>

                    <Link href="/contact" className={styles.navBarItem}>
                        <span>Contact</span>
                        <UserRound />
                    </Link>
                </nav>

            </div>

        </header>
    );
}