import React from "react";
import { Card } from './card'

export const CardSpace = () => {
  return (
    <div className="w-4/5 p-10 flex justify-between">
      <Card />
      <Card />
      <Card />
    </div>
  )
}

