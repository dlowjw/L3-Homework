import './App.css'
import useFetchData from "./custom-hooks/useFetchData";


/**
 * Build a dashboard - due on Thursday
 * - Components, API Request (Done)
 * - useState, useEffect (Done)
 * - map -> map recipe data (Done)
 * - filter -> by diet
 * - reduce -> total calorie / nutrition data (Done)
 */

// const url = "https://api.spoonacular.com/recipes/random";
import { Header } from './components/header'
import { CardSpace } from './components/cardSpace'
import { Breakdown } from './components/breakdown'
import { Filter } from './components/filter'

import { useState, useEffect } from 'react'

function App() {
  const [data, error, getData] = useFetchData();
  const [items, setItems] = useState();
  const [calorieLimit, setCalorieLimit] = useState(999999999);
  const [finalBreakdown, setBreakdown] = useState({calories: 0, carbs: 0, fat: 0, protein: 0});

  useEffect(() => {
    if (data) {

      let filteredItems = data.results.filter((recipe) => recipe.nutrition.nutrients[0].amount <= calorieLimit);
      console.log(filteredItems);
      let displayedItems = filteredItems.slice(0, 3);
      console.log(displayedItems);
      setItems(displayedItems);
      // console.log(items);

      let calories = displayedItems.reduce((acc, recipe) => acc + recipe.nutrition.nutrients[0].amount, 0,);
      let carbs = displayedItems.reduce((acc, recipe) => acc + recipe.nutrition.nutrients[0].amount * recipe.nutrition.caloricBreakdown.percentCarbs / 100, 0,);
      let fat = displayedItems.reduce((acc, recipe) => acc + recipe.nutrition.nutrients[0].amount * recipe.nutrition.caloricBreakdown.percentFat / 100, 0,);
      let protein = displayedItems.reduce((acc, recipe) => acc + recipe.nutrition.nutrients[0].amount * recipe.nutrition.caloricBreakdown.percentProtein / 100, 0,);
      
      // console.log("Calories Total: " + calories);
      setBreakdown({calories: calories, carbs: carbs, fat: fat, protein: protein});
      // console.log(finalBreakdown);
    }    
  }, [data]);

  return (
    <>
      <div className="flex flex-col items-center">
        <Header />
        <CardSpace data={items}/>
        <div className="flex justify-between w-4/5">
          <Breakdown finalBreakdown={finalBreakdown} />
          <Filter getData={getData} setCalorieLimit={setCalorieLimit} />
        </div>
      </div>
    </>
  )
}

export default App
