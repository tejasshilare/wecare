import { User } from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const Login = async (req, res) => {
  try {
    const { Email, Password } = req.body;
    console.log("Received request:", req.body);

    if (!Email || !Password) {
      console.log("Invalid Data: Email or Password is missing.");
      return res.status(401).json({
        message: "Invalid Data",
        success: false,
      });
    }

    const user = await User.findOne({ Email });
    console.log("User found:", user);

    if (!user) {
      console.log("User not found for email:", Email);
      return res.status(401).json({
        message: "Invalid email or password",
        success: false,
      });
    }

    const isMatch = await bcryptjs.compare(Password, user.Password);
    console.log("Password comparison result:", isMatch);

    if (!isMatch) {
      console.log("Password does not match for user:", user._id);
      return res.status(401).json({
        message: "Invalid email or password",
        success: false,
      });
    }

    const tokenData = {
      id: user._id,
    };
    const token = await jwt.sign(tokenData, "awdadsadawawcawcawd", {
      expiresIn: "1d",
    });
    console.log("Token generated successfully for user:", user._id);

    return res
      .status(200)
      .cookie("token", token)
      .json({
        message: `Welcome back ${user.FName}`,
        user,
        success: true,
      });
  } catch (error) {
    console.log("Error occurred:", error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

export const Logout = async (req, res) => {
  res.clearCookie("token").status(200).json({
    message: "User logged out successfully",
    success: true,
  });
};

export const Register = async (req, res) => {
  try {
    const { FName, LName, Email, Phoneno, Password } = req.body;
    if (!FName || !LName || !Phoneno || !Email || !Password) {
      return res.status(401).json({
        message: "Invalid data",
        success: false,
      });
    }
    const user = await User.findOne({ Email });
    if (user) {
      return res.status(401).json({
        message: "This email is already in use....",
        success: false,
      });
    }

    const hashPassword = await bcryptjs.hash(Password, 16);

    await User.create({
      FName,
      LName,
      Email,
      Phoneno,
      Password: hashPassword,
    });

    return res.status(201).json({
      message: "Account Created Successfully.",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
