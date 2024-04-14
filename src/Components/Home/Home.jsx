import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import slider_img1 from '../../Assets/images/1.jpg'
import slider_img2 from '../../Assets/images/2.jpg'
import bigSlider_img3 from '../../Assets/images/grocery-banner.png'
import bigSlider_img4 from '../../Assets/images/grocery-banner-2.jpeg'

import Slider from "react-slick";
import CategoriesSlider from '../categoriesSlider/categoriesSlider';
export default function Home() {

    // use slick slider
 var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
  };
  
  // store products to render them
  const [products,setProducts]=useState([])

  // Get All products fun
  async function getAllProducts(){
    const {data}=await axios.get("https://ecommerce.routemisr.com/api/v1/products")
    setProducts(data.data);
  }

  // the best place to call funn is in componenetDidMount
  useEffect(()=>
  {
    getAllProducts()
  },[])
  return <>

  {/* Create home slider  */}
    <header>
      <div className="row g-0">
        <div className="col-md-10">
          
                <Slider {...settings}>
                    <div>
                        <img src={bigSlider_img3} className='w-100' alt="" />
                        
                    </div>
                   <div>
                        <img src={bigSlider_img4} className='w-100' alt="" />
                        
                    </div>
                    
                   
                    </Slider>
        </div>
        <div className="col-md-2">
          <img src={slider_img1} className='w-100' alt=''/>
          <img src={slider_img2} className='w-100' alt=''/>
        </div>
      </div>
    </header>

{/* Create Categories slider */}
  <CategoriesSlider/>


    <div className="row">
   {products.map((product)=>{
    return <div key={product.id} className="col-md-3">
      <Product product={product}/>
    </div>
   })}
    </div>
  </>
}
