import styles from "./Button.module.css";

export default function Button2({ btnColor }) {
  const handleClick = () => {
    changeBackGround(btnColor);
  };

  return (
    <button
      onClick={handleClick}
      style={{ backgroundColor: btnColor }}
      className={styles.btn}
    ></button>
  );
}

export function changeBackGround(color) {
  document.documentElement.className = `${color}`;
  localStorage.bg = color;
}
