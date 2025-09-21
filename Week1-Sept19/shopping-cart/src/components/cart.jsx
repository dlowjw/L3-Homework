import React from "react";

export const Cart = () => {
  return (
    <div>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>thing</td>
            <td>5</td>
            <td>$5</td>
          </tr>
          <tr>
            <td>thing 2</td>
            <td>3</td>
            <td>$9</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}


