import React from "react";

export const Cart = ({cartItems}) => {
  return (
    <div>
      <table className="table-fixed w-full">
        <thead>
          <tr className="">
            <th>Product</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
        {/* Mapping Cart items from data */}
        {cartItems.map(({thumbnail, itemName, itemCost}) => {
          return(
          <>
          <tr className="gap-x-10">
            <td>
              <div className="flex flex-col">
                {/* not sure why need the self-center */}
                <img src={thumbnail} className="self-center" />
                <h1>{itemName}</h1>
              </div>
            </td>
            <td><input type="number" name="quantity" defaultValue="1" min="0" className="border-1 border-solid border-black"></input></td>
            <td>${itemCost}</td>
          </tr>
          </>)
        })}
        </tbody>
      </table>
    </div>
    
  )
}


