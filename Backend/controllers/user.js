import  {User}  from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { SiEspressif } from "react-icons/si";


export const Login = async(req,res)=>{
  try{
     const {Email,Password} = req.body;
     if(!Email || !Password){
      return res.status(401).json({
        message:"Invalid Data",
        success:false
      })
     };
     const user = await User.findOne({Email});
     if(!user){
      return res.status(401).json({
        message:"Invlaid email or password",
        success:false
      })
     }
   
     const isMatch = await bcryptjs.compare(Password,user.Password);
     if(!isMatch){
      return res.status(401).json({
        message:"Invlaid email or password",
        success:false
      })
     }
     
     const tokenData={
      id:user._id
     }
     const token = await jwt.sign(tokenData,"awdadsadawawcawcawd",{expiresIn:"1d"});
     return res.status(200).cookie("token",token,{httpOnly:true}).json({
      message:"Welcome back ${user.FName}",
      success:true
     });

  }catch(error){
      console.log(error);
  }
}
 export const Logout = async (req,res)=>{
  return res.status(200).cookie(token,"",{expiresIn:new Date(Date.now()),httpOnly:true}).json({
    message:"user logged out successfully",
    success:true
  });
 }

 export const Register = async(req,res) =>{
   try{
       const {FName,LName,Email,Phoneno,Password}= req.body;
       if(!FName || !LName || !Phoneno || !Email || !Password){
         return res.status(401).json({
            message:"Invalid data",
            success:false
         })
       }
      const user = await User.findOne({Email});
       if(user){
         return res.status(401).json({
             message:"This email is already in use....",
             success:false,
         })
       }
       
       const hashPassword = await bcryptjs.hash(Password,16);

       await User.create({
         FName,LName,Email,Phoneno,
         Password:hashPassword
       }); 

       return res.status(201).json({
         message:"Account Created Successfully.",
         success:true,
       });
   }catch(error){
        console.log(error);
   }
}
