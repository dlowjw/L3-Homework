import React from "react";

export const Filter = () => {
  return (
    <div className="w-3/5 flex justify-evenly">
      <div>
        <h1>Set Limitations (per item)</h1>
        <div className="flex justify-between gap-2">
          <h2>Calories: </h2>
          <div className="flex gap-3">
            <input type="number" className="border border-black"></input>
            <h2>~</h2>
            <input type="number" className="border border-black"></input>
          </div>
        </div>
        <div className="flex justify-between gap-2">
          <h2>Protein: </h2>
          <div className="flex gap-3">
            <input type="number" className="border border-black"></input>
            <h2>~</h2>
            <input type="number" className="border border-black"></input>
          </div>
        </div>
        <div className="flex justify-between gap-2">
          <h2>Carbs: </h2>
          <div className="flex gap-3">
            <input type="number" className="border border-black"></input>
            <h2>~</h2>
            <input type="number" className="border border-black"></input>
          </div>
        </div>
        <div className="flex justify-between gap-2">
          <h2>Fat: </h2>
          <div className="flex gap-3">
            <input type="number" className="border border-black"></input>
            <h2>~</h2>
            <input type="number" className="border border-black"></input>
          </div>
        </div>
        
      </div>
      <button onClick={() => getData(url, key) } className="border border-black cursor-pointer p-10">Get<br />Recipe</button>
      
    </div>
  )
}