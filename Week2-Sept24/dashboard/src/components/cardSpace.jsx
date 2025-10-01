import React from "react";
import { Card } from './card'

export const CardSpace = ({data}) => {
  { console.log("card space");
    console.log(data);}
  if (data) {
    // console.log(data.results);
    return (
      <div className="w-4/5 p-10 flex justify-between">
        {data.map((recipe) => {
          // console.log("map");
          return(
            <>
              <Card recipe={recipe}/>
            </>
          )
        })}

        {/* <Card recipe={data.results[0]}/> */}
      </div>
    )
  }
}

