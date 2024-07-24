import React, { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";
import "./styles.css"; // Make sure to import your styles

const Home: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext) as any;

  return (
    <div className="home">
      <div className={`home ${theme}`}>
        <h3>Welcome!</h3>
        <label className="toggle-switch">
          <input
            type="checkbox"
            className="toggle-switch__checkbox"
            checked={theme === "dark"}
            onChange={toggleTheme}
          />
          <span className="toggle-switch__slider"></span>
        </label>
      </div>
    </div>
  );
};

export default Home;
