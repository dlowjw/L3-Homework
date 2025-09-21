import React from "react";

export const Total = () => {
  return (
    <div>
      <div>
        <div className="flex justify-between">
          <h1>Subtotal</h1>
          <h1>$15</h1>
        </div>
        <div className="flex justify-between">
          <h1>Shipping</h1>
          <h1>$0</h1>
        </div>
        <div className="flex justify-between">
          <h1>Total</h1>
          <h1>$15</h1>
        </div>
        <div className="flex gap-5">
          <label htmlFor="notes">Order Notes</label>
          <input type="text" id="notes" name="notes" className="border-1 border-solid border-black"/>
        </div>
      </div>
    </div>
  )
}