//step1:create server
// const express = require("express");
import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./Utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";

databaseConnection();

dotenv.config({
   path:".env" 
})






//call the express
const app = express();
// const PORT=8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

app.get("/",(req,res)=>{
    res.status(200).json({
       message:"Hello im speaking from backend",
       sucess:true
    });
});


//api
app.use("/api/v1/user",userRoute);
//http://localhost:8080/api/v1/user + /register(from userRoute)

const callBackFunction = ()=>{
   console.log(`Server listen ar port ${process.env.PORT}`);
}


app.listen(process.env.PORT,callBackFunction);
