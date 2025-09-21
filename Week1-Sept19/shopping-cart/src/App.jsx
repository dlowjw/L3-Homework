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
*/

import { useState } from 'react'
import './App.css'
import { Header } from './components/header'
// import { Cart } from './components/cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="">
        <Header />
      </div>
    </>
  )
}

export default App
