import { useContext, useState } from "react";
import styles from "./Button.module.css";
import { ChangeContext } from "../../context/ChangeContext";

export default function Button({ btnColor }) {
  const { setBgColor, toggleChageBackGround } = useContext(ChangeContext);

  const handleClick = (btnColor) => {
    toggleChageBackGround(btnColor);
    setBgColor(btnColor);
  };

  return (
    <>
      <button
        onClick={() => handleClick(btnColor)}
        className={styles.btn}
        style={{ backgroundColor: btnColor }}
      ></button>
    </>
  );
}
