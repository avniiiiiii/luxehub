import React from "react";

import Home from "./Home.jsx";
import Header from "./components/Header.jsx";
import Cart from "./pages/Cart.jsx";
import Footer from "./components/Footer.jsx";
import Product from "./components/Product.jsx";
import { productsData } from "./api/Api.jsx";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";

//no matter if we click on sign in or wherever, these three will always be visible//
//The purpose of this code is to define the layout structure of a web page or application. The Layout component acts as a wrapper that
//contains the header, main content (usually controlled by React Router, hence the Outlet component), and footer. By encapsulating this layout
//structure within a component, you can easily reuse it across different pages or components of your application.
//It also helps in maintaining a consistent layout and structure throughout your application.
const Layout = () => {
  return (
    <>
      <div>
        <Header />
        <ScrollRestoration />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
//createBrowserrouter function is used to create a browser router instance in React Router.
// It's typically used to wrap the root of your application and provide routing functionality to the components.

const router = createBrowserRouter([
  //an array containing route configurations. Each route configuration is an object with properties.//

  {
    //path will have some layout and children//
    path: "/", //Specifies the URL path that the route matches.//In this case, the path is set to "/" which means it matches the root URL of the application.
    element: <Layout />, // Represents the React element to render when the route matches.// Here, it's <Layout />, indicating that when the root URL is matched, the Layout component will be rendered.
    children: [{ path: "/", element: <Home />, loader: productsData }], //Represents nested routes or child routes. Child routes are routes that are nested within a parent route. In this case, it specifies an array with a single child route configuration:
    //This is the path for the child route, which is also "/" indicating that it matches the root URL. //Specifies the React element to render when this child route is matched.// // Here, it's <Home />, indicating that when the root URL is matched, the Home component will be rendered.
  },
  {
    path: "/Product/:id",
    element: <Product />,
  },
  {
    path: "/Cart",
    element: <Cart />,
  },
]);
function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
