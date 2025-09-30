import React from "react";

export const Breakdown = ({finalBreakdown}) => {
  return (
    <div className="w-3/10 flex flex-col items-center">
      <h1>Total Breakdown</h1>
      <h2>Calories: {finalBreakdown.calories} kcal</h2>
      <div>
        <h2>Macros:</h2>
        <h2>Carbs: {finalBreakdown.carbs}</h2>
        <h2>Fat: {finalBreakdown.fat}</h2>
        <h2>Protein: {finalBreakdown.protein}</h2>
      </div>
    </div>
  )
}

