import React, { useState } from "react";

/**
 * "In Stock" | "Out of Stock"
 */

const OutOfStockItem = () => {
  const isInStock = false;

  return (
    <div>
      <h2>Chicken Quesadilla</h2>
      <h3>Price: $12.99</h3>
      <p>{isInStock ? "In Stock" : "Out of Stock"}</p>
    </div>
  );
};

// dark theme = red text, light theme blue

const ThemeToggle = () => {
  const [theme, setTheme] = useState("dark");

  return (
    <>
      {theme}
      <button onClick={() => setTheme(theme == "dark" ? "light" : "dark")}>Change Theme</button>
      <div className={`${theme == "dark" ? "text-red-500" : "text-blue-500"}`}>
        The current theme is changing
      </div>
    </>
  );
};

const LoggedInUser = () => {
  const isLoggedIn = false;

  return <div>{isLoggedIn ? "User Logged In" : "User Logged Out"}</div>;
};

const ConditionalRendering = () => {
  return (
    <div>
      <OutOfStockItem />
      <ThemeToggle />
    </div>
  );
};

export default ConditionalRendering;
