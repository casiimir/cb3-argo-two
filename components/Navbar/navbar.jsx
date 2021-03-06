import styles from "./styles.module.scss";
import Link from "next/link";
import logo from "../Images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineHome } from "react-icons/ai";
import { RiContactsLine } from "react-icons/ri";
import { GrInfo } from "react-icons/gr";
import { FiShoppingCart } from "react-icons/fi";
import { GrLanguage } from "react-icons/gr";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useVacationContext } from "../../Context/Provider";
export const Navbar = () => {
  const {
    state: { cart },
  } = useVacationContext();

  const [expand, setExpand] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setExpand(false);
  }, [router.pathname]);

  const dropMenu = () => {
    if (expand) {
      return setExpand(false);
    } else {
      return setExpand(true);
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src={logo} alt="logo" />
        </Link>
      </div>
      <div className={styles.toggler}>
        <GiHamburgerMenu onClick={dropMenu} />

        {/* MOBILE VERSION */}
        <div className={styles.menuMobile}>
          <ul className={expand ? styles.listMobile : styles.hidden}>
            <li>
              <Link href="/">
                <div className={styles.SingleNav}>
                  <AiOutlineHome />
                  <p>Home</p>
                </div>
              </Link>
            </li>

            <li>
              <Link href="/cart">
                <div className={styles.SingleNav}>
                  <FiShoppingCart />
                  <div className={styles.notify}>{cart.length}</div>
                  <p>Carrello</p>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <div className={styles.SingleNav}>
                  <GrInfo />
                  <p>Su di noi</p>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <div className={styles.SingleNav}>
                  <RiContactsLine />
                  <p>Contattaci</p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* DESKTOP VERSION */}
      <div className={styles.menu}>
        <ul className={styles.list}>
          <li>
            <Link href="/">
              <AiOutlineHome />
            </Link>
          </li>

          <li>
            <Link href="/cart">
              <div>
                <FiShoppingCart />
                <div className={styles.notify}>{cart.length}</div>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <GrInfo />
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <RiContactsLine />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
