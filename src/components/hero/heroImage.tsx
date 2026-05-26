import styles from "./hero.module.scss";

export default function HeroImage() {
    return (
        <div className={styles.imageWrapper}>
            <div className={styles.imageCard}>
                <div className={styles.topBar}></div>
                <p>Pictures of Animals</p>
            </div>
        </div>
    );
}