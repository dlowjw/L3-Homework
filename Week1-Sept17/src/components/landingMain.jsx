import React from "react";

export const LandingMain = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-4 aspect-square">
      {/* Top Left */}
      <div className="flex flex-col row-span-2 col-span-2 bg-yellow-200 rounded-4xl justify-evenly items-center">
        <img 
          src={"https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg"}
          className="w-9/10" />
        <div className="flex flex-row justify-between items-center w-9/10">
          <p>Freshly crafted treats, <br />made just for you</p>
          <h1 className="text-3xl">(4.8 since 1985)</h1>
          <div>
            <img 
              src={"https://png.pngtree.com/png-vector/20200317/ourmid/pngtree-bar-of-chocolate-icon-design-png-image_2161255.jpg"}
              className="w-16" />
          </div>
        </div>
      </div>
      {/* Top Right */}
      <div className="flex flex-col row-span-1 col-span-1 bg-blue-200 rounded-4xl">
        <h1 className="text-3xl">SCHOOL</h1>
        <p>Learn to bake deliciously</p>
        <img 
          src={"https://images.pexels.com/photos/24876032/pexels-photo-24876032.jpeg"}
          className="w-50" />
        <div className="flex flex-row">
          <button key="explore" id="explore">Explore</button>
          <button key="pin" id="pin">🥖</button>
        </div>
        
      </div>
      {/* Bottom Right */}
      <div className="row-span-2 col-span-1 bg-orange-400 rounded-4xl">
        <h1 className="text-3xl">EVERYDAY</h1>
         <img 
          src={"https://images.pexels.com/photos/2035729/pexels-photo-2035729.jpeg"}
          className="" />
        <p>Freshly baked, delivered daily<br />right to your door!</p>
      </div>
      {/* Bottom Left */}
      <div className="flex flex-row row-span-1 col-span-2 bg-gray-300 rounded-4xl">
        <h1 className="text-5xl">TOP-5<br />PICKS</h1>
        <div>
          <div>
            <img 
            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyJXnrdLnDnFeNRPbo7i3g2sSt70yZh6EvOg&s"}
            className="" />
          </div>
          <div>
            <img 
            src={"https://www.shutterstock.com/image-vector/melon-bread-icon-isolated-on-260nw-2668700579.jpg"}
            className="" />
          </div>
        </div>
      </div>
    </div>
  );
};