import styles from "./hero.module.scss";
import HeroImage from "./heroImage";

export default function Hero() {
    return (
        <div className={styles.heroAlignment}>
            <div className={styles.heroText}>
                <h1 className={styles.heroTitle}>Compassionate veterinary care</h1>
                <p className={styles.heroSubtitle}>rehabilitation and hydrotherapy services for pets across Irlam and the surrounding communities.</p>
            </div>
            <HeroImage />
        </div>
  
    );
}