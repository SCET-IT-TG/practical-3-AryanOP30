import React, { useState } from "react";

function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(false);

  const styles = {
    backgroundColor: isDark ? "#222" : "#fff",
    color: isDark ? "#fff" : "#000",
    padding: "20px"
  };

  return (
    <div style={styles}>
      <h2>Theme Switcher Component</h2>

      <p>
        This is a preview of the theme switcher component. Click the button to
        toggle between light and dark modes.
      </p>

      <button onClick={() => setIsDark(!isDark)}>
        {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
}

export default ThemeSwitcher;
