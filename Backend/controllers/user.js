import  {User}  from "../models/userModel.js";
import bcryptjs from "bcryptjs";


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
         message:"Account Created Successfully."
       });
   }catch(error){
        console.log(error);
   }
}
