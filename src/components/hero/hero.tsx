import styles from "./hero.module.scss";

export default function Hero() {
    return (
        <div className={styles.heroText}>
            <p className={`${styles.heroSubtitle} ${styles.noselect}`}>Compassionate <b>veterinary care, rehabilitation and hydrotherapy services</b> for pets across Irlam and the surrounding communities.</p>
        </div>
    );
}