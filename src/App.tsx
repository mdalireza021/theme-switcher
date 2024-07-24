import React from "react";
import { ThemeProvider } from "./theme/ThemeContext";
import Home from "./home/Home"; // Your main component

const App: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "500px",
        height: "500px",
      }}
    >
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </div>
  );
};

export default App;
