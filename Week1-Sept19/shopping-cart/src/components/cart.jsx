import React from "react";
import { useState, useEffect } from 'react'
import { Total } from '../components/total'

export const Cart = ({ cartItems }) => {
  const [items, setItems] = useState(cartItems);
  const [total, setTotal] = useState(0);
  const setPrice = (event, items, index) => {
    const updatedItems = items.map((item, i) => {
      if (i === index)
      {
        // let newItem = item;
        // newItem.quantity = event.target.value;

        // return newItem;
        
        // Tried these 2 ways below but it didn't work, they keep saying ", expected" on all the dot notations
        
        const newItem = { id: item.id, thumbnail: item.thumbnail, itemName: item.itemName, itemCost :item.itemCost, quantity : event.target.value };
        return newItem;

        //return { ...item, quantity: event.target.value };      
      }
      else
        return item;
    });

    setItems(updatedItems);
  }

  const removeItem = (items, index) => {
    const updatedItems = items.filter((item, i) => i !== index);
    console.log(updatedItems);
    setItems(updatedItems);
  }

  const calculateTotal = (items) => {
    const sum = items.reduce((acc, item) => acc + item.itemCost * item.quantity, 0);
    return sum;
  }

  useEffect(() => {
    const sum = items.reduce((acc, item) => acc + item.itemCost * item.quantity, 0);
    setTotal(sum);
  }, [items])

  return (
    <div className='flex justify-between'>
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
          {items.map(({id, thumbnail, itemName, itemCost, quantity}, index) => {  

            return(
            <>
              <tr className="gap-x-10">
                <td>
                  <div className="flex flex-col">
                    <img src={thumbnail} className="self-center" />
                    <h1>{itemName}</h1>
                  </div>
                </td>
                <td> 
                  <div className="flex flex-col">
                    <input type="number" name="quantity" defaultValue={quantity} min="0" 
                      onChange={(event) => setPrice(event, items, index)} 
                      className="border-1 border-solid border-black"></input>
                    <button type="button" onClick={() => {
                      // const updatedItems = items.filter((item) => item.id !== id);
                      // setItems(updatedItems);
                      setItems(items.filter(item => {return item.id !== id}))

                    }} className="cursor-pointer text-white bg-black">Remove</button>
                    {/* <button type="button" onClick={() => removeItem(items, index) } 
                    className="cursor-pointer text-white bg-black">Remove</button> */}
                  </div>
                  
                </td>
                
                <td>${itemCost * quantity}</td> 
              </tr>
            </>)
          })}
          </tbody>
        </table>
      </div>
      <Total totalPrice={total} />
    </div>
  )
}

