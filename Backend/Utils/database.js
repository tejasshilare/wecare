import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
   path:"../.env"
})



const databaseConnection = ()=>{
   mongoose.connect('mongodb+srv://tejasmete121:narutooz@cluster0.h5443ax.mongodb.net/').then(()=>{
     console.log("mongoDB connecetd successfully");
   }).catch((error)=>{
      console.log(error);
   })
};


export default databaseConnection;

