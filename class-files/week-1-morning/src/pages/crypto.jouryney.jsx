import React, { useState } from "react";
import CryptoHeader from "../components/day-1/cryptoheader.jsx";
import Card from "../components/day-1/card.jsx";
import "./crypto.styles.css";

/**
 * .map, .filter, .reduce
 * build a shopping cart: 
 * map -> displaying everything in shopping cart, 
 * filter: filtering for specific items, 
 * reduce: calculating total price in shopping cart
 */

const CryptoJourney = () => {
  const [boolean, setBoolean] = useState(false);
  const [cards, setCards] = useState([
    {
      id: 0,
      title: "card-0",
      text: "this is card one",
    },
    {
      id: 1,
      title: "card-1",
      text: "this is card two",
    },
    {
      id: 2,
      title: "card-2",
      text: "this is card three",
      boolean: false,
    },
  ]);

  //! -> invert current value
  const flip = () => {
    setBoolean(!boolean);
  };

  return (
    <div className="crypto-container">
      <CryptoHeader />
      <button onClick={flip}>Turn On/Off Card</button>
      <div className="flex flex-row justify-center items-center gap-4">
        {cards.map((cards) => (
          <Card title={cards.title} text={cards.text} />
        ))}
      </div>
    </div>
  );
};

export default CryptoJourney;
