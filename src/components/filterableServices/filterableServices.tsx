"use client";

import { useState } from "react";
import ServiceCard from "../serviceCard/serviceCard";
import mainStyles from "../../styles/services.module.scss";
import { formatPrice } from "@/lib/formatPrice";
import styles from "./filterableServices.module.scss";

type Service = {
    _id: string;
    title: string;
    price: string;
    description: string;
    category: string;
    importantNote?: string;
};

type Props = {
    services: Service[];
};

export default function FilterableServices({ services }: Props) {

    const categories = [
        "All Services",
        ...new Set(
            services
                .map(service => service.category)
                .filter(Boolean)
        )
    ];

    const [selectedCategory, setSelectedCategory] = useState("All Services");

    const filteredServices =
        selectedCategory === "All Services"
            ? services
            : services.filter(
                  service => service.category === selectedCategory
              );

    return (
        <div>
            <div className={styles.filterBar}>
                

                {categories.map(category => (

                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={
                            selectedCategory === category
                                ? styles.active
                                : ""
                        }
                    >
                        {category}
                    </button>

                ))}

            </div>
            <div className={mainStyles.serviceGrid}>

                {filteredServices.map(service => (

                    <ServiceCard
                        key={service._id}
                        title={service.title}
                        description={service.description}
                        price={formatPrice(service.price)}
                        category={service.category}
                        importantNote={service.importantNote}
                    />

                ))}

            </div>
        </div>
    
    )
};