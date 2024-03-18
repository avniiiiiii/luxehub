import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const productData = useSelector((state) => state.luxehub.productData);

  return (
    <>
      <div>
        <img
          className="w-full h-550 object-cover"
          src="https://wallpapercave.com/wp/wp8678058.jpg"
          alt="cartImg"
        />
        <div className="max-w-screen-xl mx-auto py-20 flex">
          <CartItem />
          <div className="w-1/3 bg-[#fafafa] py-6 px-4">
            <div className=" flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
              <h2 className="text-2xl font-medium ">Cart Total</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
