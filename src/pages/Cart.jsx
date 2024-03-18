import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const productData = useSelector((state) => state.luxehub.productData);

  console.log("Product Data:", productData);

  return (
    <>
      <div>Cart</div>
    </>
  );
};

export default Cart;
