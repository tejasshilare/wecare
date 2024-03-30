import React from 'react'
import Header from '../components/Header'
import Footer from "../components/Footer";
import signup_image from '../assets/signup-img.png'
import register from '../assets/registration.png'
const Contact = () => {
  return (
    <div>
      <Header/>
      
      <div className="flex flex-col items-center justify-center">
            <img className="w-[50%] p-5 m-5" src={signup_image}  alt={signup_image}/>
            <img className="w-[70%] p-5 m-5" src={register}  alt={register}/>
     
            </div >
       
          <Footer/>
    </div>
  )
}

export default Contact