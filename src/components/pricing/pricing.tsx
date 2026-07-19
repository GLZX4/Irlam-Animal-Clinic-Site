import { client } from "@/lib/sanity.client";
import styles from "./pricing.module.scss";

type PricingItem = {
  _id: string;
  service: string;
  price: string;
  description?: string;
};

async function getPricing(): Promise<PricingItem[]> {
  return client.fetch(`
    *[_type == "pricing"] | order(service asc) {
      _id,
      service,
      price,
      description
    }
  `);
}

export default async function Pricing() {
  const pricing = await getPricing();

  return (
    <section className={styles.pricingSection}>
      <div className={styles.heading}>
        <h2>Pricing</h2>
        <p>Clear and simple pricing for common services.</p>
      </div>

      <div className={styles.pricingGrid}>
        {pricing.map((item) => (
          <article key={item._id} className={styles.pricingCard}>
            <div>
              <h3>{item.service}</h3>
              {item.description && <p>{item.description}</p>}
            </div>

            <strong>{item.price}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}