/**
 * .map, .filter, .reduce
 * build a shopping cart: 
 * map -> displaying everything in shopping cart, 
 * filter: filtering for specific items, 
 * reduce: calculating total price in shopping cart

Homework: 
- practice rendering components and manipulating data with the map, reduce, and filter methods for arrays
- rebuild either the todo app if you missed class or build a shopping cart app
- note you can chain those methods inside of the jsx as well, in our class example we do it outside

TODO:
- useState to update cart
- Filter: filtering for specific items
- Reduce: to add the cart total
*/

import './App.css'
import { Header } from './components/header'
import { Cart } from './components/cart'
import { Total } from './components/total'

function App() {
  const cartItems = [
    { id: 1, thumbnail: "https://www.genkithings.com/cdn/shop/files/29.png?v=1756453538&width=96", itemName: "Long Sling Bag", itemCost: 160, quantity: 1 },
    { id: 2, thumbnail: "https://www.genkithings.com/cdn/shop/files/kickstand-asset-1.jpg?v=1713409973&width=96", itemName: "Kickstand", itemCost: 15, quantity: 1 },
    { id: 3, thumbnail: "https://www.genkithings.com/cdn/shop/files/Frame1400006069.webp?v=1756453613&width=96", itemName: "Power Bank", itemCost: 115, quantity: 1 },
  ];

  return (
    <>
      <div className="">
        <Header />
        <div className='flex justify-between'>
          <Cart cartItems={cartItems} />
          <Total />
        </div>
      </div>
    </>
  )
}

export default App
