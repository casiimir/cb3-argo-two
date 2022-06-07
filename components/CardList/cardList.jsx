import styles from "./styles.module.scss";
import { MediumCard } from "../Cards/MediumCard/mediumCard";
import { useVacationContext } from "../../Context/Provider";

export const CardList = () => {


  const {
    state: { italiaImg, sveziaImg, franciaImg, usaImg },

  } = useVacationContext();

  const itDescript = "Esplora le meraviglie d'italia";

  const sveDescript = "Esplora le meraviglie di Svezia";
  const fraDescript = "Esplora le meraviglie di Francia";
  const usalDescript = "Esplora le meraviglie degli USA";
  return (
    <div className={styles.cardContiner}>
      <MediumCard name={"Italia"} description={itDescript} img={italiaImg} />
      <MediumCard name={"Svezia"} description={sveDescript} img={sveziaImg} />
      <MediumCard name={"Francia"} description={fraDescript} img={franciaImg} />
      <MediumCard name={"Stati Uniti d'America"} description={usalDescript} img={usaImg} />

    </div>
  );
};
