import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(true);

  const theme = {
    dark,
    bg: dark ? "#0a0a0f" : "#f4f1eb",
    surface: dark ? "#13131a" : "#ffffff",
    surfaceAlt: dark ? "#1a1a25" : "#f9f7f4",
    border: dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.08)",
    text: dark ? "#e8e6f0" : "#1a1820",
    textMuted: dark ? "#7a7890" : "#7a7890",
    accent: "#6c63ff",
    accentGlow: dark ? "rgba(108,99,255,0.15)" : "rgba(108,99,255,0.08)",
    green: "#22c55e",
    navBg: dark ? "rgba(10,10,15,0.85)" : "rgba(244,241,235,0.9)",
  };

  const toggleTheme = () => setDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}


export function useTheme() {
  return useContext(ThemeContext);
}