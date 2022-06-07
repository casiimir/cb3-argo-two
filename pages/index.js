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
    state: { vacation, italia, spagna, francia, romania },
  } = useVacationContext();

  useEffect(() => {
    fetchAll("/cities");
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Ferdast.com</title>
        <meta name="description" content="Generated by create next app" />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.8.2/mapbox-gl.css"
          rel="stylesheet"
        />

        <link rel="icon" href="/favicon.ico" />
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
