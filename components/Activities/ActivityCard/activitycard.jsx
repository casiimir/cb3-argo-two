import styles from "./styles.module.scss";
import { GrGroup } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";

export const ActivityCard = ({ info }) => {
  console.log(info);
  return {
    ...(info.about !== "TBD" ? (
      <div className={styles.ActivityCardContainer}>
        <h2>{info.title}</h2>
        <img src={info.verticals[0].cover_image_url} />
        <div className={styles.descriptionContain}>
          <p>{info.about.split(" ").splice(0, 100).join(" ")}</p>
        </div>
        <h3>{info.retail_price.formatted_value}</h3>
        <div className={styles.kind}>
          {info.group_size[0].name.toLowerCase().includes("gruppo") ? (
            <GrGroup />
          ) : (
            <BsPerson />
          )}
          <p>{info.group_size[0].name}</p>
        </div>

        <div className={styles.Categories}>
          {info.categories.map((el) => (
            <p>{el.name.toLowerCase()}</p>
          ))}
        </div>
      </div>
    ) : (
      <></>
    )),
  };
};