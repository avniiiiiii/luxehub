import React from "react";
import { useSelector } from "react-redux";
import { MdOutlineClose } from "react-icons/md";
// import { HiOutlineArrow } from "react-icons/md";
const Cartitem = () => {
  const productData = useSelector((state) => state.luxehub.productData);
  return (
    <div className="w-2/3 pr-10">
      <div className="w-full">
        <h2 className="font-titleFont text-2xl">Shopping Cart</h2>
      </div>
      <div>
        {productData.map((item) => {
          <div
            key={item._id}
            className="flex items-center justify-between gap-6 mt-6"
          >
            <div className="flex items-center gap-2">
              <MdOutlineClose />
            </div>
          </div>;
        })}
      </div>
    </div>
  );
};

export default Cartitem;
