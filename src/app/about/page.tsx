import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import styles from "@/styles/about.module.scss";

export default function About() {
  return (
    <>  
        <Header />  
            <main className={styles.main}>
                <section className={styles.hero}>
                    <p>About Irlam Animal Clinic</p>

                    <h1>
                        Independent veterinary care built on compassion and trust
                    </h1>

                    <span>
                        Providing friendly, professional veterinary care for pets and their
                        owners across Irlam and the surrounding communities since 2016.
                    </span>
                </section>

                <section className={styles.storySection}>
                    <div className={styles.storyContent}>
                        <h2>Our Story</h2>

                        <p>
                            Irlam Animal Clinic was established in April 2016 by
                            Dr Rebecca Wade MRCVS and Jackie Reilly.
                        </p>

                        <p>
                            As an independent veterinary practice, our goal has always been
                            to provide a friendly, welcoming environment where pets receive
                            the highest standard of care and owners feel supported and
                            informed.
                        </p>

                        <p>
                            We are proud to care for a wide range of animals, including
                            cats, dogs, rabbits, small pets, and even pet poultry.
                        </p>
                    </div>

                    <div className={styles.storyImage}></div>
                </section>

                <section className={styles.hydrotherapy}>
                    <div className={styles.hydroContent}>
                        <p>Specialist Service</p>

                        <h2>Hydrotherapy & Rehabilitation</h2>

                        <span>
                            Our hydrotherapy facilities help pets recover from injury,
                            improve mobility, build strength, and maintain quality of life.
                        </span>

                        <ul>
                            <li>Post-operative rehabilitation</li>
                            <li>Arthritis management</li>
                            <li>Weight management support</li>
                            <li>Improved mobility and muscle strength</li>
                        </ul>
                    </div>

                    <div className={styles.hydroImage}>
                        <div className={styles.hydrotherapyPool}></div>
                    </div>
                </section>

                <section className={styles.valuesSection}>
                    <h2>What Makes Us Different</h2>

                    <div className={styles.valuesGrid}>
                        <div className={styles.valueCard}>
                            <h3>Independent Practice</h3>
                            <p>
                                We make decisions based on what is best for your pet,
                                providing a personal and local service.
                            </p>
                        </div>

                        <div className={styles.valueCard}>
                            <h3>Compassionate Care</h3>
                            <p>
                                Every animal is treated with kindness, patience, and
                                understanding.
                            </p>
                        </div>

                        <div className={styles.valueCard}>
                            <h3>Experienced Team</h3>
                            <p>
                                Our team combines professional expertise with a genuine love
                                of animals.
                            </p>
                        </div>
                    </div>
                </section>

                <section className={styles.factsSection}>
                    <div className={styles.factCard}>
                        <span>2016</span>
                        <p>Established</p>
                    </div>

                    <div className={styles.factCard}>
                        <span>Independent</span>
                        <p>Veterinary Practice</p>
                    </div>

                    <div className={styles.factCard}>
                        <span>All Pets</span>
                        <p>Including Poultry</p>
                    </div>
                </section>

                <section className={styles.ctaSection}>
                    <h2>Looking for a friendly local veterinary practice?</h2>

                    <p>
                        Our team is here to help with everything from routine health checks
                        to ongoing care and advice.
                    </p>

                    <a href="tel:01617751234" className={styles.ctaButton}>
                        Contact Us Today
                    </a>
                </section>
            </main>
        <Footer />
    </>
  );
}