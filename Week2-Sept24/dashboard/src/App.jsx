import { useState } from 'react'
import useFetchData from "./custom-hooks/useFetchData";
import './App.css'

/**
 * Build a dashboard - due on Thursday
 * - Components, API Request
 * - useState, useEffect
 * - map -> map recipe data 
 * - filter -> by diet
 * - reduce -> total calorie / nutrition data
 */

// const url = "https://api.spoonacular.com/recipes/random";
import { Header } from './components/header'
import { CardSpace } from './components/cardSpace'
import { Breakdown } from './components/breakdown'
import { Filter } from './components/filter'
const url = "https://api.spoonacular.com/recipes/complexSearch?diet=ketogenic&addRecipeNutrition=true";
const key = "cc0e5594b35e41b3b74872e2971cf192";

function App() {
  const [data, error, getData] = useFetchData();

  return (
    <>
      <div className="flex flex-col items-center">
        <Header />
        <CardSpace />
        <div className="flex justify-between w-4/5">
          <Breakdown />
          <Filter />
        </div>
        {/* <div >
          <button onClick={() => getData(url, key)}>Get Recipe</button>
        </div> */}
      </div>
    </>
  )
}

export default App
