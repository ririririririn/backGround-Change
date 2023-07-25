import { createContext, useEffect, useState } from "react";

export const ChangeContext = createContext();

export function ChangeProvider({ children }) {
  const [bgColor, setBgColor] = useState("white");

  const toggleChageBackGround = (color) => {
    setBgColor(color);
    updateBackGround(color);
  };

  return (
    <ChangeContext.Provider
      value={{ bgColor, setBgColor, toggleChageBackGround }}
    >
      {children}
    </ChangeContext.Provider>
  );
}

export function updateBackGround(color) {
  document.documentElement.className = `${color}`;
  localStorage.bg = color;
}
