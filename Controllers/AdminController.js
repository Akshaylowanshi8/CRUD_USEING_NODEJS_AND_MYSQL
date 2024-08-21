const bcrypt = require('bcrypt');
const db = require('../models');
const { Op, where } = require('sequelize');
const JWT_SECRET = 'your-secret-key';
const jwt = require('jsonwebtoken');
const  CreateAdminUser=async(req,res)=>{
      let  Username  =req.body.Username; 
      let  Email =req.body.Email ;
      let  bPassword = req.body.Password ;
      let  MobileNo = req.body.MobileNo ;
     const saltRounds = 10;

     if(!Username ||!Email ||!bPassword||!MobileNo){

        res.send("All fields are required!")
        return
     }
     try {
             // bycript password 
            const Password = await bcrypt.hash(bPassword, saltRounds);
            console.log(Password);

         await db.AdminUser.create({ Username , Email, Password, MobileNo}).then((data) => {
        res.status(200).json({ message: "CreateAdmin  successful", data:data });
        })
      } catch (error) {
        console.error('Error creating student:', error);
        res.status(500).send('Server Error');
      }
}


const LoginAdminUser= async(req,res)=>{

 const Email = req.body.Email;
 const Password = req.body.Password;

 if (!Email||!Password)
 {

    res.send("All fileds are requird!")
 }
//  console.log(Email,Password);
 try {
// console.log(Email);
     await db.AdminUser.findOne( { where: { Email : Email }}).then(resp => {
        
      
      if(resp){

   const isMatch =  bcrypt.compare(Password, resp.Password);
        if (isMatch) {

          const token = jwt.sign({ username: resp.username }, JWT_SECRET, { expiresIn: '1h' });

          res.json({ token });
        } else {
            res.json({message :"Password is invalid!", }) 
        }
        
      }
      else{
        res.status(500).json({message:'user not found'});


      }
           
     
      }) 
      } catch (error) {
        console.error('Error creating student:', error);
        res.status(500).send('Server Error', error);
      
      }
}


module.exports={

    CreateAdminUser,
    LoginAdminUser
}