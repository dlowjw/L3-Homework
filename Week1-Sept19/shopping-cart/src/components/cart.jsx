import React from "react";

const setPrice = (event, index) => {
  console.log(event.target.value);
  return event.target.value;
}

const setItemValue = () => {
  // inputValue * itemCost 
  // return
}

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
        {cartItems.map(({id, thumbnail, itemName, itemCost, quantity}, index) => {

          return(
          <>
          <tr className="gap-x-10" key={id}>
            <td>
              <div className="flex flex-col">
                <img src={thumbnail} className="self-center" />
                <h1>{itemName}</h1>
              </div>
            </td>
            <td><input type="number" name="quantity" defaultValue={quantity} min="0" 
                  onChange={(event) => quantity = setPrice(event, index)} 
                  className="border-1 border-solid border-black"></input></td>
            <td>${itemCost * quantity}</td> 
          </tr>
          </>)
        })}
        </tbody>
      </table>
    </div>
    
  )
}


