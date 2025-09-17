import React from "react";

export const Navbar = ({navLinks}) => {
  return (
    <div className="flex flex-row justify-between items-center w-full">
      <h1>SWIRLZY</h1>
      <div className="flex flex-row items-center gap-4">
        {navLinks.map((links) => (
          <a href={links.link}>{links.text}</a>
        ))}
      </div>
      <button key="cart" id="cart">🛒 Cart</button>
    </div>

  );
};