import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState({});
 


  //fun to get all carts
  async function getLoggedCartProducts() {
    
    try{const { data } = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/cart",
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    );
    console.log(data);
    setCart(data);}
    catch(error){
      console.log(error)
    }
    
    
   
  }

  useEffect(() => {
     getLoggedCartProducts();
     
    
  }, []);
  return  <>
   {cart.data==null ?
      <h2 className="alert alert-warning text-center my-5">
        No products in your cart
      </h2>
      :
       
       
        <div className="my-5">
          <button className="btn btn-outline-danger d-block ms-auto">
            Clear Cart
          </button>
          
         {cart.data.products.map((cartProduct) => {
            return <div className="cart-product shadow rounded-2 my-3">
              <div className="row align-items-center">
                <div className="col-md-2">
                  <img
                    className="w-100"
                    src={cartProduct.product.imageCover}
                    alt=""
                  />
                </div>
                <div className="col-md-8">
                  <h2>{cartProduct.product.title}</h2>
                  <h5>{cartProduct.product.category.name}</h5>
                  <p className="d-flex justify-content-between">
                    <span>{cartProduct.price} EGP</span>
                    <span>
                      <i className=" fas fa-star rating-color me-1"></i>{" "}
                      {cartProduct.product.ratingsAverage}
                    </span>
                  </p>
                  <p>
                    <span className="fw-bolder">Total Price:</span>{" "}
                    {cartProduct.count * cartProduct.price} EGP
                  </p>
                </div>
                <div className="col-md-2">
                  <button className="btn text-danger">Remove</button>
                  <div className="d-flex align-items-center">
                    <button className="btn bg-main text-white mx-2">-</button>
                    <span>{cartProduct.count}</span>
                    <button className="btn bg-main text-white mx-2">+</button>
                  </div>
                </div>
              </div>
            </div>
          })} 

          <div className="d-flex justify-content-between">
            <a className="btn bg-main text-white">CheckOut</a>
            <p>Total cart Price: {cart.data.totalCartPrice} EGP</p>
          </div>
        
        </div>
       
      } 
      
    </>
  
  
  
  
}
