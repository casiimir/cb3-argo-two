import Head from "next/head";
import { Hero } from "../components/Hero/hero";

import styles from "../styles/Home.module.css";
import { CardList } from "../components/CardList/cardList";
import { useEffect } from "react";
import { useVacationContext } from "../Context/Provider";
import CarouselTwo from "../components/Carousel/CarouselTwo";
import { Carousel } from "../components/Carousel/carousel";

export default function Home() {
  const {
    fetchAll,
    state: { vacation, italia, russia, francia, usa },
  } = useVacationContext();

  useEffect(() => {
    fetchAll("/cities");
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Ferdast</title>
        <meta name="description" content="Generated by create next app" />

        <link rel="icon" href="/favicon.png" />
      </Head>

      <Hero />
      <section className="carouselContainer">
        <CarouselTwo />
      </section>

      <CardList />
      {/* <Carousel /> */}
    </div>
  );
}
