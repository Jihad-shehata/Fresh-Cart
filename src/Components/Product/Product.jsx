import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'


function Product({ product }) {

// fun to add product to cart
async function addProductToCart(productId){
const {data}=await axios.post('https://ecommerce.routemisr.com/api/v1/cart',
{
    productId:productId
},
{
    headers:{
        token:localStorage.getItem('token')
    }
})
}

    return (
       
            <div className="product overflow-hidden px-2 py-3 cursor-pointer">
                <Link to={'/productDetails/'+product.id} className='a'>
                    <img className='w-100' src={product.imageCover} alt="" />
                    <h5 className='font-sm text-main'>{product.category.name}</h5>
                    <h4>{product.title.split(" ").slice(0, 2).join(" ")}</h4>
                    <p className='d-flex justify-content-between'>
                        <span >{product.price} EGP</span>
                        <span>
                            <i className='fas fa-star rating-color me-1'></i>
                            {product.ratingsAverage}
                        </span>
                    </p>
                </Link>
                <button onClick={()=>{addProductToCart(product.id)}} className='btn bg-main text-white w-100 '>+Add To Cart</button>
            </div>
      
    )
}

export default Product