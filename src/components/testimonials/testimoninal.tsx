import styles from "./testimonial.module.scss";

const testimonials = [
    {
        name: "Sarah M.",
        pet: "Dog owner",
        text: "The team were lovely and made the whole appointment feel calm and reassuring.",
        rating: "★★★★★",
    },
    {
        name: "James R.",
        pet: "Cat owner",
        text: "Really friendly staff, clear advice, and great care for our cat.",
        rating: "★★★★★",
    },
    {
        name: "Emily T.",
        pet: "Rabbit owner",
        text: "A welcoming clinic with a caring approach. Would happily recommend.",
        rating: "★★★★★",
    },
];

export default function Testimonial() {
    return (
        <section className={styles.testimonialSection}>
            <div className={styles.testimonialHeader}>
                <p className={styles.smallTitle}>Client Reviews</p>
                <h2>Trusted by Our Customers</h2>
            </div>

            <div className={styles.scroller}>
                {testimonials.map((review, index) => (
                    <div className={styles.card} key={index}>
                        <p className={styles.rating}>{review.rating}</p>
                        <p className={styles.text}>"{review.text}"</p>
                        <div>
                            <strong>{review.name}</strong>
                            <span>{review.pet}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}