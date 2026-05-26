import styles from "./CTAphone.module.scss";

export default function CTAphone() {    
    return (
        <div className={styles.CTAphoneContainer}>
            <h2>Call us Today:</h2>
            <a href="tel:0161 775 1322" className={styles.CTAphoneButton}>0161 775 1322</a>
        </div>
    );
}