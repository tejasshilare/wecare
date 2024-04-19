import React, { useState } from "react";
import donateimg from "../assets/donate-img.png";
import { NavLink } from "react-router-dom";

const SignUpDonor = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      // Form submission logic
      console.log("Form submitted successfully:", formData);
    } else {
      setErrors(errors);
    }
  };

  const validateForm = (values) => {
    let errors = {};
    if (!values.firstName.trim()) {
      errors.firstName = "First name is required";
    }
    if (!values.lastName.trim()) {
      errors.lastName = "Last name is required";
    }
    if (!/^\d{10}$/.test(values.phone.trim())) {
      errors.phone = "Invalid phone number";
    }
    if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) {
      errors.email = "Invalid email address";
    }
    if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }
    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    return errors;
  };

  return (
    <>
      <div className="flex flex-col  sm:flex-row  justify-center items-center space-x-0 sm:space-x-4">
        <img src={donateimg} alt={donateimg} width={"500px"}></img>
        {/* Form Code */}
        <form
          className="bg-white p-8 rounded-lg w-[400px] shadow-md"
          onSubmit={handleSubmit}
        >
          <h1 className="font-bold mb-4 text-orange-500">Donor Sign Up</h1>
          <div className="mb-4">
            <label
              htmlFor="first-name"
              className="block text-gray-700 font-bold mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className={`appearance-none border ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              } rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline`}
              placeholder="Enter First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs italic">{errors.firstName}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="last-name"
              className="block text-gray-700 font-bold mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className={`appearance-none border ${
                errors.lastName ? "border-red-500" : "border-gray-300"
              } rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline`}
              placeholder="Enter Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs italic">{errors.lastName}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-700 font-bold mb-2"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              className={`appearance-none border ${
                errors.phone ? "border-red-500" : "border-gray-300"
              } rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline`}
              placeholder="Enter Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs italic">{errors.phone}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className={`appearance-none border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline`}
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">{errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className={`appearance-none border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline`}
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="text-red-500 text-xs italic">{errors.password}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirm-password"
              className="block text-gray-700 font-bold mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className={`appearance-none border ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              } rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline`}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs italic">
                {errors.confirmPassword}
              </p>
            )}
          </div>
          <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Sign Up
          </button>

          <p className="mt-2 text-grey-400">
            Already have an account?
            <NavLink to="/login" className="text-orange-500">
              {" "}
              Log in{" "}
            </NavLink>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignUpDonor;