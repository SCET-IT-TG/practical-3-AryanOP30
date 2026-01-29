import React from "react";
import Counter from "./components/Counter";
import TweetInput from "./components/TweetInput";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  return (
    <div>
      <Counter />
      <hr />
      <TweetInput />
      <hr />
      <ThemeSwitcher />
    </div>
  );
}

export default App;
