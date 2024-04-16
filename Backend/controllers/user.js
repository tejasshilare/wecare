import { User } from "../models/userModels";

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

       await User.create({
         FName,LName,Email,Phoneno,Password
       }); 

       return res.status(201).json({
         message:"Account Created Successfully."
       });
   }catch(error){
        console.log(error);
   }
}
