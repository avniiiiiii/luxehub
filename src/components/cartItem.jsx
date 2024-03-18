import React from "react";
import { useSelector } from "react-redux";

const Cartitem = () => {
  const productData = useSelector((state) => state.luxehub.productData);
  return (
    <div className="w-2/3 pr-10">
      <div className="w-full">
        <h2 className="font-titleFont text-2xl">Shopping Cart</h2>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Cartitem;
