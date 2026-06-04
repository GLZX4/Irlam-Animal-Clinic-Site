import styles from "@/components/whyUs/whyUs.module.scss";
import { HeartHandshake, MessageCircleHeart, Stethoscope, Waves } from "lucide-react";

export default function WhyUs() {
    return (
        <div>
            <section className={styles.whyChoose}>
                <h2>Why choose Irlam Animal Clinic?</h2>

                <div className={styles.whyGrid}>
                <div className={styles.whyCard}>
                    <HeartHandshake size={36} />
                    <h3>Friendly Independent Practice</h3>
                </div>

                <div className={styles.whyCard}>
                    <Stethoscope size={36} />
                    <h3>Experienced Veterinary Team</h3>
                </div>

                <div className={styles.whyCard}>
                    <Waves size={36} />
                    <h3>Hydrotherapy & Rehabilitation</h3>
                </div>

                <div className={styles.whyCard}>
                    <MessageCircleHeart size={36} />
                    <h3>Clear, Supportive Advice</h3>
                </div>
                </div>
            </section>
        </div>
    );
}