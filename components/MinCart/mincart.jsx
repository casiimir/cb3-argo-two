import styles from "./styles.module.scss";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";
import { useVacationContext } from "../../Context/Provider";
import Link from "next/link";

export const MinCart = () => {
  const [expandCart, setExpandCart] = useState();

  const {
    addToCart,
    state: { cart },
  } = useVacationContext();

  const deleteAct = (index) => {
    cart = cart.filter((el, i) => i != index);
  };

  return (
    <>
      <div
        className={styles.MinCartwrapper}
        onClick={() => setExpandCart(!expandCart)}
      >
        {expandCart ? <MdOutlineClose /> : <FiShoppingCart />}
      </div>
      <div
        className={`${styles.recapCart} ${expandCart ? styles.showRecap : ""}`}
      >
        <h3>Riepilogo</h3>
        <ul className={styles.allActivity}>
          {cart.length !== 0 ? (
            cart.map((el, i) => (
              <li key={i} className={styles.singleAct}>
                {el} <MdOutlineClose onClick={() => deleteAct(i)} />
              </li>
            ))
          ) : (
            <h4>Il tuo carrello è vuoto!</h4>
          )}
        </ul>
        <Link href="/cart">
          <button className={styles.btn}>Vai al totale</button>
        </Link>
      </div>
      <div className={styles.notify}>
        <p>{cart.length !== 0 ? cart.length : 0}</p>
      </div>
    </>
  );
};
