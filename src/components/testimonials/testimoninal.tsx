import styles from "./testimonial.module.scss";

const testimonials = [
    {
        name: "Kaz Lee",
        pet: "Dog owner",
        text: "Just registered my dog, he needed seeing urgently with skin issues and same day appointment given. Lovely staff throughout this practice and very reasonable vets fees. Would highly recommend",
        rating: "★★★★★",
    },
    {
        name: "Diane Jones",
        pet: "Cat owner",
        text: "Most Caring Vets and Staff. Took my two cats since they were kittens, very happy with the treatment. Last week Rebecca and staff took care of my cat Teddy after a car accident and he is recovering well now after the excellent care he received, thank you :o)",
        rating: "★★★★★",
    },
    {
        name: "Aastha Paul",
        pet: "Dog owner",
        text: "We accidentally came to this vet instead of our emergency vet as we were really concerned about our dog and the lovely Rebecca was so helpful and kind and really cares about all animals! All the staff were lovely and I highly recommend this vets!",
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