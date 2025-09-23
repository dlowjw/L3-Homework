import React from "react";
import { useState } from 'react'

export const Cart = ({cartItems}, i) => {
  const [items, setItems] = useState(cartItems);

  const setPrice = (event, items, index) => {

    const updatedItems = items.map((item, i) => {
      if (i === index)
      {
        let newItem = item;
        newItem.quantity = event.target.value;
        // console.log(newItem);
        return newItem;
        
        // Tried these 2 ways below but it didn't work, they keep saying ", expected" on all the dot notations
        
        // const newItem = { item.id, item.thumbnail, item.itemName, item.itemCost, event.target.value };
        // return newItemtem;

        // return { item.id, item.thumbnail, item.itemName, item.itemCost, event.target.value };      
      }
      else
        return item;
    });

    setItems(updatedItems);
  }

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
          <tr className="gap-x-10">
            <td>
              <div className="flex flex-col">
                <img src={thumbnail} className="self-center" />
                <h1>{itemName}</h1>
              </div>
            </td>
            <td><input type="number" name="quantity" defaultValue={quantity} min="0" 
                  onChange={(event) => setPrice(event, items, index)} 
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

