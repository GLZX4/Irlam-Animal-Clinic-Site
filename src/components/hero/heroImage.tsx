import styles from "./hero.module.scss";

export default function HeroImage() {
    return (
        <div className={styles.heroImageContainer}>
            <div className={styles.heroImage}></div>
            <div className={styles.heroImageDecorationVertical}></div>
            <div className={styles.heroImageDecorationHorizontal}></div>
        </div>
    );
}