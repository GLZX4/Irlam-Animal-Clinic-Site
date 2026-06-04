import styles from "@/styles/contact.module.scss";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Image from "next/image";
import VetsNowLogo from "@/images/vets-now-logo.png";

export default async function Contact() {
  return (
    <div>
        <Header />
        
        <main className={styles.contactPage}>
                <section className={styles.pageHero}>
                    <p>Contact Us</p>
                    <h1>Here when your pet needs us</h1>
                    <span>
                        Get in touch with Irlam Animal Clinic for appointments, advice,
                        directions, and emergency support.
                    </span>
                </section>

                <section className={styles.contactGrid}>
                    <div className={styles.contactCard}>
                        <h2>Call the Clinic</h2>
                        <p>For appointments, advice, or general enquiries.</p>
                        <a href="tel:01617751322">0161 775 1322</a>
                    </div>

                    <div className={styles.contactCard}>
                        <h2>Out of Hours</h2>
                        <p>For urgent veterinary help when the clinic is closed.</p>
                        <a href="tel:01612226101">0161 222 6101</a>
                    </div>


                    

                    <div className={styles.contactCard}>
                        <h2>Enquiries</h2>
                        <p><a href="mailto:enquiries@irlamanimalclinic.co.uk">enquiries@irlamanimalclinic.co.uk</a></p>
                    </div>

                    <div className={styles.contactCard}>
                        <h2>Opening Hours</h2>
                        <p>Monday-Friday: 8:30am-6:00pm</p>
                        <p>Saturday: 9:00am-12:00pm</p>
                        <p>Sunday: Closed</p>
                    </div>
                </section>

                <section className={styles.findUsSection}>
                    <div className={styles.mapContainer}>
                        {/* Google Maps Embed */}
                                    <iframe
                src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=England, Unit 5, Irlam Animal Clinic, Boundary Trading Park, Liverpool Rd, Irlam, Manchester M44 6FB&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width="600"
                height="450"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen={false}
                aria-hidden="false"
                tabIndex={0}
            />
                    </div>

                    <div className={styles.locationInfo}>
                        <p>Find Us</p>

                        <h2>Visit Our Clinic</h2>

                        <address>
                            Unit 5<br />
                            Irlam Animal Clinic<br />
                            Boundary Trading Park<br />
                            Liverpool Road<br />
                            Irlam<br />
                            Manchester<br />
                            M44 6FB
                        </address>

                        <ul>
                            <li>Easy access from Liverpool Road</li>
                            <li>Parking available nearby</li>
                            <li>Clearly signposted entrance</li>
                            <li>Please keep dogs on leads and cats in carriers</li>
                        </ul>

                        <a
                            href="https://maps.google.com/?q=Unit+5+Irlam+Animal+Clinic+Boundary+Trading+Park+Liverpool+Road+Irlam+Manchester+M44+6FB"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.mapButton}
                        >
                            Open in Google Maps
                        </a>
                    </div>
                </section>

                <section className={styles.emergencyNotice}>
                    <h2>Out of Hours Emergency</h2>

                    <p>
                        If your pet requires urgent veterinary attention outside of our normal
                        opening hours, please contact our emergency care provider.
                    </p>

                    <Image
                        src={VetsNowLogo}
                        alt="Vets Now"
                        className={styles.emergencyLogo}
                    />
                    <a href="tel:01612226101">Call Emergency Contact</a>
                </section>
            </main>

        <Footer />
    </div>
    );
}