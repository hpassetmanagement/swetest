import React, { useState } from "react";
import styles from "./Main.module.css";
import Title from "./Title";
import Description from "./Description";
import Achievement from "./Achievement";
import Product from "./Product";
import Contacts from "./Contacts";
import Footer from "./Footer";

export default function Main() {
  const [activeBtn, setActiveBtn] = useState("All");

  const handleSetActiveBtn = (btnName) => {
    setActiveBtn(btnName);
  };

  return (
    <div className={styles.mainLayout}>
      <Title />
      <Description />
      <Achievement />
      <Product activeBtn={activeBtn} setActiveBtn={handleSetActiveBtn} />
      <Contacts />
      <Footer />
    </div>
  );
}
