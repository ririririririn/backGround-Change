import { useEffect } from "react";
import "./App.css";
import Button2, { changeBackGround } from "./components/Button/Button2";

export default function App2() {
  useEffect(() => {
    if (localStorage.bg) {
      const color = localStorage.getItem("bg");
      changeBackGround(color);
    } else {
      changeBackGround("white");
    }
  }, []);

  return (
    <section>
      <Button2 btnColor={"blue"} />
      <Button2 btnColor={"tomato"} />
      <Button2 btnColor={"beige"} />
    </section>
  );
}
