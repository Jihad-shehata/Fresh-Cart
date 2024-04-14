import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Register from "./Components/Register/Register";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
} from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Product from "./Components/Product/Product";
import Login from "./Components/Login/Login";
import Cart from "./Components/Cart/Cart";
import Categories from "./Components/Categories/Categories";
import Products from "./Components/Products/Products";
import Brands from "./Components/Brands/Brands";
import Orders from "./Components/Orders/Orders";
import Address from "./Components/Address/Address";
import NotFound from "./Components/NotFound/NotFound";
import AuthContextProvider from "./Components/contexts/AuthContext";
import ProtectedRoute from "./Components/protectedRoute/protectedRoute";
import AuthProtectedRoute from "./Components/ProductDetails/AuthProtectedRoute";
import ProductDetails from "./Components/ProductDetails/ProductDetails";

function App() {
  // Routing
  const router = createHashRouter([
    {
      path: "",
      element: <Layout></Layout>,
      children: [
        { path: "", element: <Navigate to={"home"} /> },
        {
          path: "register",
          element: (
            <AuthProtectedRoute>
              <Register />
            </AuthProtectedRoute>
          ),
        },
        {
          path: "login",
          element: (
            <AuthProtectedRoute>
              <Login />
            </AuthProtectedRoute>
          ),
        },

        // all this pathes needed to be protected
        {
          path: "home",
          element: (
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          ),
        },
        {
          path: "products",
          element: (
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          ),
        },
        {
          path: "cart",
          element: (
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          ),
        },
        {
          path: "categories",
          element: (
            <ProtectedRoute>
              {" "}
              <Categories />
            </ProtectedRoute>
          ),
        },
        {
          path: "brands",
          element: (
            <ProtectedRoute>
              <Brands />
            </ProtectedRoute>
          ),
        },
        {
          path: "orders",
          element: (
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          ),
        },
        {
          path: "addressess",
          element: (
            <ProtectedRoute>
              {" "}
              <Address />
            </ProtectedRoute>
          ),
        },
        {
          path: "productDetails/:id",
          element: (
            <ProtectedRoute>
              <ProductDetails></ProductDetails>
            </ProtectedRoute>
          ),
        },

        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <>
      <AuthContextProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
