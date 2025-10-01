import React from "react";

export const Card = ({recipe}) => {
  return (
    <div className="w-1/4 flex flex-col items-center gap-5">
      <h1>{recipe.title}</h1>
      <img src={recipe.image} className="w-4/5" />
      <h2>Calories: {recipe.nutrition.nutrients[0].amount} kcal</h2>
      <div>
        <h2>Macros:</h2>
        <h2>Carbs: {recipe.nutrition.nutrients[0].amount * recipe.nutrition.caloricBreakdown.percentCarbs / 100}</h2>
        <h2>Fat: {recipe.nutrition.nutrients[0].amount * recipe.nutrition.caloricBreakdown.percentFat / 100}</h2>
        <h2>Protein: {recipe.nutrition.nutrients[0].amount * recipe.nutrition.caloricBreakdown.percentProtein / 100}</h2>
      </div>
    </div>
  )
}

