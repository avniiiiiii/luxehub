import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";
import Cartitem from "../components/cartItem.jsx";
const Cart = () => {
  const productData = useSelector((state) => state.luxehub.productData);
  const userInfo = useSelector((state) => state.luxehub.userInfo);
  const [payNow, setPayNow] = useState(false);
  const [totalAmt, setTotalAmt] = useState("");

  //useeffect to constantly change the amt//
  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price.toFixed(2));
  }, [productData]);

  const handleCheckout = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      toast.error("Please sign in to Checkout");
    }
  };
  return (
    <>
      <div>
        <img
          className="w-full h-55 object-cover"
          src="https://wallpapercave.com/wp/wp8678058.jpg"
          alt="cartImg"
        />
        <div className="max-w-screen-xl mx-auto py-20 flex">
          <Cartitem />
          <div className="w-1/3 bg-[#fafafa] py-6 px-4">
            <div className=" flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
              <h2 className="text-2xl font-medium ">Cart Total</h2>
              <p className="flex items-center gap-4 text-base">
                {" "}
                Subtotal{" "}
                <span className="font-titleFont font-bold text-lg">
                  ${totalAmt}
                </span>
              </p>
              <p className="flex items-start gap-4 text-base">
                Shipping{" "}
                <span>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quos, veritatis.
                </span>
              </p>
            </div>
            <p className="font-titleFont font-semibold flex justify-between mt-6">
              Total <span className="text-xl font-bold"> ${totalAmt}</span>
            </p>
            <button
              onClick={handleCheckout}
              className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300"
            >
              proceed to checkout
            </button>
            {payNow && (
              <div className="w-full mt-6 flex items-center justify-center">
                <StripeCheckout
                  stripeKey="pk_test_51P1S9iSJRr3RghEXUHtjlDeV0HGUjW3agpRwSClftuZhXasmX9gc2M5sS6UYN3ewCrKpFlnC64UcF5Vt5yV7MtcZ004takQJwV"
                  name="Luxehub Online Shopping"
                  amount={totalAmt * 100}
                  label="Pay to bazar"
                  description={`Your Payment amount is $${totalAmt}`}
                  token={payment}
                  email={userInfo.email}
                />
              </div>
            )}
          </div>
        </div>
        <ToastContainer
          position="top-left"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </>
  );
};

export default Cart;
