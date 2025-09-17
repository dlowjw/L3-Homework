import React from "react";

export const LandingMain = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-4 aspect-square">
      <div className="flex flex-col row-span-2 col-span-2 bg-yellow-200 rounded-4xl justify-evenly items-center">
        <img 
          src={"https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg"}
          className="w-9/10" />
        <div className="flex flex-row justify-between items-center w-9/10">
          <p>Freshly crafted treats, <br />made just for you</p>
          <h1>(4.8 since 1985)</h1>
          <div>
            <img 
              src={"https://png.pngtree.com/png-vector/20200317/ourmid/pngtree-bar-of-chocolate-icon-design-png-image_2161255.jpg"}
              className="w-16" />
          </div>
        </div>
      </div>
      <div className="row-span-1 col-span-1 bg-blue-200 rounded-4xl"></div>
      <div className="row-span-2 col-span-1 bg-orange-400 rounded-4xl"></div>
      <div className="row-span-1 col-span-2 bg-gray-300 rounded-4xl"></div>
    </div>
  );
};