import React from "react";
import signup_image from "../assets/signup-img.png";
import register from "../assets/registration.png";
const Contact = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <img
          className="w-[50%] p-5 m-5"
          src={signup_image}
          alt={signup_image}
        />
        <img className="w-[70%] p-5 m-5" src={register} alt={register} />
      </div>
    </div>
  );
};

export default Contact;
