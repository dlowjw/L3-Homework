import { useState } from 'react'
import useFetchData from "./custom-hooks/useFetchData";
import './App.css'

/**
 * Build a dashboard - due on Thursday
 * - Components, API Request
 * - useState, useEffect
 * - map, filter, reduce
 */

const url = "https://api.spoonacular.com/recipes/random";
const key = "cc0e5594b35e41b3b74872e2971cf192";

function App() {
  const [data, error, getData] = useFetchData();

  return (
    <>
      <div>
        <button onClick={() => getData(url, key)}>Get Recipe</button>
        {/* <button onClick={() => getData("https://randomuser.me/api/", null)}>Get User</button> */}
      </div>
    </>
  )
}

export default App
