import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Slider from "react-slick";

 function ProductDetails() {

    // use slick slider
 var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
  };


    // to read id from url 
   const {id}= useParams()

   // store productDetails data
    const[productDetails,setProductDetails]= useState({})
    const [productSlider,setProductSlider]=useState([])
    // use loading
    const[isLoading,setIsLoading]=useState(false)

   // get spacific product according to 
   async function getProductDetails()
   {
    setIsLoading(true)
    let {data}=await axios.get("https://ecommerce.routemisr.com/api/v1/products/"+id)
    setIsLoading(false)
    setProductDetails(data.data)
    setProductSlider(data.data.images)
   }

   useEffect(()=>{
    getProductDetails()
   },[])



    return (

        <>
        {isLoading?
         <>
                <div className='d-flex align-items-center justify-content-center my-5 py-5'>
                    <i className='fas fa-spin fa-spinner fa-2x'></i>
                </div>
            </>

            :
 
            <div className='row align-items-center py-5' >
                <div className="col-md-3">

                <Slider {...settings}>
                    
                    {/* Making map to get all product imgs */}

                    {productSlider.map((image,index)=>{
                        return <div key ={index}>
                        <img src={image} className='w-100' alt="" />
                        
                    </div>
                    })}
                    
                   
                    </Slider>
                </div>
                <div className="col-md-9">
                    <h2 className='mt-2'>{productDetails?.title}</h2>
                    <h5 className='font-sm text-main mt-2'>{productDetails?.category?.name}</h5>
                    <p className='mt-2'>{productDetails?.description}</p>
                    <p className='d-flex justify-content-between mt-2'>
                        <span>{productDetails?.price} EGP</span>
                        <span>
                            <i className='fas fa-star rating-color me-1'></i>
                            <span>{productDetails?.ratingsAverage}</span>
                        </span>
                    </p>
                    <button className='btn bg-main text-white w-100 mt-2'>Add To Cart</button>

                </div>

            </div>
        }
           
           
        </>



    )
}

export default ProductDetails