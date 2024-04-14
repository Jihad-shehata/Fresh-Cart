import { useFormik } from 'formik';
import React, { useContext, useState } from 'react';
import * as Yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { authContext } from '../contexts/AuthContext';


export default function Login() {

  // Check if user logged or not 
  const {setUserIsLoggedIn,userIsLoggedIn}=useContext(authContext)

  // storing message error
  const[errorMsg,setRrrorMsg]=useState('')

  // prevent user to click tow times in resister btn in the same time
  const[isLoading ,setIsLoading]=useState(false)

  // Use Navigate hock to redirect user
  const navigate=useNavigate()

  // Validation using YUP
  const validationSchema=Yup.object({
    
    
    email:Yup.string().required("Email is required").matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,"Enter Valid Email"),
    password:Yup.string().required("Password is required").matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,"Password must contain special character, number more than 8 characters and less than 18 characters"),
    
    
    
  })

 

const{values,handleSubmit,handleChange,errors,touched,handleBlur,isValid}=useFormik({
  initialValues:{
    
    email:'',
    password:'',
   
  },
  onSubmit:async()=>
  {
    // Here we need to call backend  ==> post(URL,Data)
  //   let response= await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup",values)
  //  console.log(response)

  setRrrorMsg("")

  // To Prevent appearing error when logged account already exist
  try {
    setIsLoading(true)
    let {data}= await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin",values)

    // Here if register is success we redirect user to login using useNavigate hock
    if (data.message=="success")
    {
      // user already logged in 
      setUserIsLoggedIn(true)
      localStorage.setItem('token',data.token)

      // navigate user after login to what he want
      if(window.location.pathname=='/login')
      {
        navigate("/home")
      }
      else{
        navigate(window.location.pathname)
      }
      
    }
  } catch (error) {
    setRrrorMsg(error.response.data.message)
  }
setIsLoading(false)
  },
  // validate:validate
  validationSchema
})

  return <>
    <div className="w-75 m-auto my-5">
      <h1>Login Now :</h1>
      <form onSubmit={handleSubmit}>
        


        <label htmlFor="email" className='my-1'>Email:</label>
        <input onChange={handleChange}  onBlur={handleBlur} value={values.email} type="email" className='form-control mb-3' id='email' name='email' />
        {errors.email&&touched.email&& <p className='alert alert-danger'>{errors.email}</p>}


        <label htmlFor="password" className='my-1'>Password:</label>
        <input onChange={handleChange} onBlur={handleBlur} value={values.password} type="password" className='form-control mb-3' id='password' name='password' />
        {errors.password&&touched.password&& <p className='alert alert-danger'>{errors.password}</p>}



        {/* Showing error message if logged account alrady exist */}
        {errorMsg&&<div className="alert alert-danger">{errorMsg}</div>}

        {/* <h1>{isValid+""}</h1> */}

        {/* showing spinner when request is send */}
        {
          isLoading ?
          <button disabled type='button' className='btn bg-main px-4 text-white ms-auto d-block'> <i className='fas fa-spin fa-spinner px-3'></i> </button>
        :
        <button  type='submit' disabled={!isValid||isLoading} className='btn bg-main px-3 text-white ms-auto d-block'>Login</button>
        }

      </form>
    </div>
  </>
}
