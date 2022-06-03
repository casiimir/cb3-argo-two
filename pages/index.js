import Head from "next/head";
import { Hero } from "../components/Hero/hero";
import styles from "../styles/Home.module.css";
import { CardList } from "../components/CardList/cardList";
import { useEffect } from "react";
import { useVacationContext } from "../Context/Provider";

export default function Home() {
  const {
    fetchAll,
    state: { vacation, italia, spagna, francia, romania },
  } = useVacationContext();

  useEffect(() => {
    fetchAll("/cities");
  }, []);

  useEffect(() => {
    console.log("vacation", vacation);
    console.log("ita:", italia);
    console.log("spa:", spagna);
    console.log("fra:", francia);
    console.log("rom:", romania);
  }, [vacation]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Ferdast.com</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <CardList />
    </div>
  );
}
