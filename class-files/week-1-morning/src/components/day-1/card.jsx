import React from "react";
import image from "../../assets/test.png";

/**
 *  props {
 *  title: ""
 * text: "",
 * addTwoNumbers: reference to function
 * }
 */
// Props in your function components are props objects.
function Card({ title, text }) {
  return (
    <>
      <div
        className={`flex flex-col justify-between items-center w-[200px] h-[200px] rounded-4xl shadow-neutral-300 glass p-4`}
      >
        <h3 className="text-2xl text-white">{title}</h3>
        <img className="" src={image} width="100px" height="100px" />
        <p className=" text-sm text-white">{text}</p>
      </div>
    </>
  );
}

export default Card;
