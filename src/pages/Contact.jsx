import React from 'react'
import Header from '../components/Header'
import Footer from "../components/Footer";
import Contactpage from '../components/Contactpage';
import contact from '../assets/contact.png'
const Contact = () => {
  return (
    <div>
      <Header/>
      {/* <Contactpage/> */}
      <div className="flex justify-center">
            <img className="w-[75%] p-5 m-5" src={contact}  alt={contact}/>
     
            </div >
      <Footer/>
    </div>
  )
}

export default Contact