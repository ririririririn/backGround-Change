import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button/Button";
import { useEffect } from "react";
import { updateBackGround } from "./context/ChangeContext";

function App() {
  
  useEffect(() => {
    if (localStorage.getItem("bg")) {
      const color = localStorage.getItem("bg");
      updateBackGround(color);
    } else {
      updateBackGround("white");
    }
  }, []);

  return (
    <section>
      <Button btnColor={"blue"} />
      <Button btnColor={"tomato"} />
      <Button btnColor={"beige"} />
    </section>
  );
}

export default App;
