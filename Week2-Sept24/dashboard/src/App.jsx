import { useState } from 'react'
import useFetchData from "./custom-hooks/useFetchData";
import './App.css'

function App() {
  const [data, error, getData] = useFetchData();

  return (
    <>
      <div>
        {/* <button onClick={() => getData(url, key)}>Get Recipe</button> */}
        <button onClick={() => getData("https://randomuser.me/api/", null)}>Get User</button>
      </div>
    </>
  )
}

export default App
