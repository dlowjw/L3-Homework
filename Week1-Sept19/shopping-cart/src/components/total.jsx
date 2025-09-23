import React from "react";

// Shipping Price is just placeholder 
export const Total = (totalPrice) => {
  {console.log(totalPrice.totalPrice);}
  return (
    <div>
      <div className="flex flex-col gap-1">
        <div className="flex justify-between">
          <h1>Subtotal</h1>
          <h1>${totalPrice.totalPrice}</h1>
        </div>
        <div className="flex justify-between">
          <h1>Shipping</h1>
          <h1>$0</h1>
        </div>
        <div className="flex justify-between">
          <h1>Total</h1>
          <h1>${totalPrice.totalPrice}</h1>
        </div>
        <div className="flex gap-5">
          <label htmlFor="notes">Order Notes</label>
          <input type="text" id="notes" name="notes" className="border-1 border-solid border-black"/>
        </div>
        <button type="button" className="cursor-pointer text-white bg-black">Submit Order</button>
      </div>
    </div>
  )
}