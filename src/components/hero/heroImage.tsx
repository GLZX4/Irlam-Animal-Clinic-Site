"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./hero.module.scss";

import Image1 from "@/images/scrolIMG1.jpg";
import Image2 from "@/images/scrolIMG2.jpg";
import Image3 from "@/images/scrolIMG3.jpg";
import Image4 from "@/images/scrolIMG4.jpg";

const images = [Image1, Image2, Image3, Image4];

export default function HeroImage() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.imageWrapper}>
            <div className={styles.imageCard}>
                <div className={styles.topBar}></div>

                {images.map((image, index) => (
                    <Image
                        key={index}
                        src={image}
                        alt="Patient at Irlam Animal Clinic"
                        fill
                        priority={index === 0}
                        className={`${styles.heroImage} ${
                            current === index ? styles.visible : ""
                        }`}
                    />
                ))}

                <div className={styles.dots}>
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className={`${styles.dot} ${
                                current === index ? styles.active : ""
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}