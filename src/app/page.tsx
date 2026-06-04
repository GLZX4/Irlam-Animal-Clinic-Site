import Background from "@/components/background/background";
import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import HeroImage from "@/components/hero/heroImage";
import CTAphone from "@/components/CTA/CTAphone";
import Testimonials from "@/components/testimonials/testimoninal";
import WhyUs from "@/components/whyUs/whyUS";
import Footer from "@/components/footer/footer";
import styles from "../styles/page.module.scss"


export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Background />
        <section className={styles.mainContent}>
          <div className={styles.ContentLeft}>
            <Hero />
            <CTAphone />
            <Testimonials />
          </div>

          <div className={styles.ContentRight}>
            <HeroImage />
          </div>
        </section>
        <WhyUs />
      </main>
      <Footer />
    </>
  );
}