import styles from "./hero.module.scss";

export default function Hero() {
    return (
        <div className={styles.heroText}>
            <h1>Compassionate care for pets across Irlam</h1>
            <p>Veterinary care, rehabilitation and hydrotherapy services from a friendly independent clinic.</p>           
        </div>
    );
}