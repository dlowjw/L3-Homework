import React from "react";

export const Navbar = ({navLinks}) => {
  return (
    <div className="flex flex-row justify-between items-center w-full p-8">
      <h1 className="text-5xl">SWIRLZY</h1>
      <div className="flex flex-row items-center gap-12">
        {navLinks.map((links) => (
          <a href={links.link}>{links.text}</a>
        ))}
      </div>
      <button key="cart" id="cart">🛒 Cart</button>
    </div>

  );
};