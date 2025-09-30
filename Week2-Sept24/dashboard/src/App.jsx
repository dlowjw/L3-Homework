import './App.css'
import useFetchData from "./custom-hooks/useFetchData";


/**
 * Build a dashboard - due on Thursday
 * - Components, API Request (Done)
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

import { useState, useEffect } from 'react'

function App() {
  const [data, error, getData] = useFetchData();
  // const [recipes, setRecipes] = useState();

  // useEffect(() => {
  //   setRecipes(data);
  //   console.log(data);
  //   console.log(recipes);
  // }, [data]);

  return (
    <>
      <div className="flex flex-col items-center">
        <Header />
        <CardSpace data={data}/>
        <div className="flex justify-between w-4/5">
          <Breakdown />
          <Filter getData={getData}/>
        </div>
      </div>
    </>
  )
}

export default App
