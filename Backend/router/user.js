const router = require("express").Router();
const User = require("../Modals/User");
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Post = require("../Modals/Post");
const VerificationToken = require("../Modals/VerificationToken");
const JWTSEC = "#2@!@$ndja45883 r7##";


router.post("/create/user" ,
    body('email').isEmail(),
    body('password').isLength({ min: 6 }) ,
    body('username').isLength({ min: 3 }) ,
    body('phonenumber').isLength({ min: 10}) ,
    async(req , res)=>{
          const error = validationResult(req);
          if(!error.isEmpty()){
                    return res.status(400).json("some error occured")
          }
        
          let user = await User.findOne({email:req.body.email});
          if(user){
                    return res.status(200).json("Please login with correct password")
          };
          const salt = await bcrypt.genSalt(10);
          const secpass = await bcrypt.hash(req.body.password , salt)

          user = await User.create({
                    username:req.body.username,
                    email:req.body.email,
                    password:secpass,
                    profile:req.body.profile,
                    phonenumber:req.body.phonenumber
          })
          const accessToken = jwt.sign({
                    id:user._id,
                    username:user.username
          }, JWTSEC);
          
})


//verify email
router.post("/verify/email" , async(req , res)=>{
    const {user} = req.body;
    const mainuser = await User.findById(user);
    if(!mainuser) return res.status(400).json("User not found");
    if(mainuser.verifed === true){
        return res.status(400).json("User already verifed")
    };
    const token = await VerificationToken.findOne({user:mainuser._id});
    if(!token){
        return res.status(400).json("Sorry token not found")
    }
})
    
//Login
router.post("/login" ,
    body('email').isEmail(),
    body('password').isLength({ min: 6 }) ,
    async(req , res)=>{
          const user = await User.findOne({email:req.body.email});
          if(!user){
                  return res.status(400).json("User doesn't found")  
          }

          const Comparepassword = await bcrypt.compare(req.body.password , user.password);
          if(!Comparepassword){
                    return res.status(400).json("Password error")
          }
          const accessToken = jwt.sign({
                    id:user._id,
                    username:user.username
          }, JWTSEC);
          const {password , ...other} = user._doc
          res.status(200).json({other , accessToken});
                    


})
//Delete User account 
router.delete("/delete/:id" , verifyToken , async(req , res)=>{
    try {
        if(req.params.id !== req.user.id){
            return res.status(400).json("Account doesn't match")
        }else{
            const user = await User.findByIdAndDelete(req.params.id);
            return res.status(200).json("User account has been deleted")
        }
    } catch (error) {
        return res.status(500).json("Internal server error")
    }
})

//get user details for post
router.get("/post/user/details/:id" , async(req , res)=>{
    try {
        const user = await User.findById(req.params.id);
        if(!user){
            return res.status(400).json("User not found")
        }
        const {email , password , phonenumber , ...others}=user._doc;
        res.status(200).json(others);
    } catch (error) {
        return res.status(500).json("Internal server error")
    }
})

module.exports = router;