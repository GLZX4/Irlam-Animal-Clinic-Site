import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import styles from "../styles/page.module.scss"

export default function Home() {
  return (
    <>
      <Header />
      <main>
          <Hero />
      </main>
    </>
  );
}