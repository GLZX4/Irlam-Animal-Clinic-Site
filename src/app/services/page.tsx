import Header from "@/components/header/header";
import styles from "@/styles/services.module.scss";
import Footer from "@/components/footer/footer";
import FilterableServices from "@/components/filterableServices/filterableServices";
import { client } from "@/lib/sanity.client";

type Service = {
    _id: string;
    title: string;
    price: string;
    description: string;
    category: string;
    importantNote?: string;
};

async function getServices(): Promise<Service[]> {
    return client.fetch(`
        *[_type == "pricing"] | order(displayOrder asc){
            _id,
            title,
            price,
            description,
            category,
            importantNote
        }
    `);
}

export default async function ServicesPage() {

    const services = (await getServices()) || [];

    return (
        <>
            <Header />

            <main className={styles.servicesPage}>

                <section className={styles.pageHero}>
                    <p>Services & Pricing</p>
                    <h1>Clear care options for your pet</h1>
                    <span>
                        Explore our veterinary services and prices for pets across Irlam.
                    </span>
                </section>

                <FilterableServices services={services} />

                <div className={styles.CTAhelp}>
                    <h2>Need help choosing the right service?</h2>
                    <p>
                        Our friendly team is here to assist you in selecting the best care for your pet.
                        Contact us today for personalized advice and support.
                    </p>

                    <a href="tel:0161 775 1322" className={styles.CTAbutton}>
                        0161 775 1322
                    </a>
                </div>

                <span className={styles.disclaimer}>
                    Prices shown are a guide. Final costs may vary depending on your pet’s individual needs,
                    treatment plan, weight, medication, or clinical advice.
                </span>

            </main>

            <Footer />
        </>
    );
}