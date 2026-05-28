
import styles from "./serviceCard.module.scss";

type ServiceCardProps = {
    title: string;
    price: string;
    description: string;
    category: string;
    importantNote?: string;
};

export default function ServiceCard({ title, price, description, category, importantNote }: ServiceCardProps) {
    return (
        <article className={styles.serviceCard}>
            <p className={styles.category}>{category}</p>
            <h3>{title}</h3>
            <p>{description}</p>

            {importantNote && (
                <small>{importantNote}</small>
            )}

            <span>{price}</span>
        </article>
    );
}