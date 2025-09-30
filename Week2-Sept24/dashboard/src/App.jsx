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
  const [finalBreakdown, setBreakdown] = useState({calories: 0, carbs: 0, fat: 0, protein: 0});

  useEffect(() => {
    if (data) {
      let calories = data.results.reduce((acc, recipe) => acc + recipe.nutrition.nutrients[0].amount, 0,);
      let carbs = data.results.reduce((acc, recipe) => acc + recipe.nutrition.nutrients[0].amount * recipe.nutrition.caloricBreakdown.percentCarbs / 100, 0,);
      let fat = data.results.reduce((acc, recipe) => acc + recipe.nutrition.nutrients[0].amount * recipe.nutrition.caloricBreakdown.percentFat / 100, 0,);
      let protein = data.results.reduce((acc, recipe) => acc + recipe.nutrition.nutrients[0].amount * recipe.nutrition.caloricBreakdown.percentProtein / 100, 0,);
      
      console.log("Calories Total: " + calories);
      setBreakdown({calories: calories, carbs: carbs, fat: fat, protein: protein});
    }    
  }, [data]);

  return (
    <>
      <div className="flex flex-col items-center">
        <Header />
        <CardSpace data={data}/>
        <div className="flex justify-between w-4/5">
          <Breakdown finalBreakdown={finalBreakdown} />
          <Filter getData={getData}/>
        </div>
      </div>
    </>
  )
}

export default App
