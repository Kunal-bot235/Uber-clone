// const userModel=require('../models/user.model');
// const userService=require('../services/user.service');
// const {validationResult}=require('express-validator');
// const blackList=require('../models/blacklistToken.model');


// module.exports.registerUser=async (req,res,next) =>{
//     const errors=validationResult(req);
//     if (!errors.isEmpty()){
//         return res.status(400).json({errors:errors.array()})
//     }
// const {fullname,email,password}=req.body;
// const isUserAlreadyExist=await userModel.findOne

// ({email})

// if(isUserAlreadyExist){
//     return res.status(400).json({message:'User already exist'})
// }
// const hashedPassword = await userModel.hashPassword(password);

// const user=await userService.createUser({
//     firstname:fullname.firstname,lastname:fullname.lastname,email,password:hashedPassword
// });

// const token=user.generateAuthToken();

// res.status(200).json({token,user})
// }
// module.exports.loginUser=async (req,res,next) =>{
    
//     const errors=validationResult(req);
//     if (!errors.isEmpty()){
//         return res.status(400).json({errors:errors.array()})
//     }
//     const {email,password}=req.body;
//     const user=await userModel.findOne({email}).select('+password');
//     if(!user){
//         return res.status(401).json({message:'Invalid email or password'});
//     }
//     const isMatch=await user.comparePassword(password);
//     if(!isMatch){
//         return res.status(401).json({message:'Invalid email or password'});
//     }
//     const token=user.generateAuthToken();
//     res.status(200).json({token,user});
//     res.cookie('token',token);
// }

// module.exports.getProfile=async (req,res,next) =>{
//     res.status(200).json({user:req.user});
// }
// module.exports.logoutUser=async (req,res,next) =>{
//     res.clearCookie('token');
//     const token=req.cookies.token || req.headers['authorization'].split(' ')[1];
//     await blackList.create({token});
//     res.status(200).json({message:'Logged out'});
// }

const userModel = require('../models/user.model');
const userService = require('../services/user.service');
const { validationResult } = require('express-validator');
const blackList = require('../models/blacklistToken.model');

module.exports.registerUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password } = req.body;
    const isUserAlreadyExist = await userModel.findOne({ email });

    if (isUserAlreadyExist) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
    });

    const token = user.generateAuthToken();

    return res.status(200).json({ token, user });
};

module.exports.loginUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    const user = await userModel.findOne({ email }).select('+password');
    if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = user.generateAuthToken();
    res.cookie('token', token, { httpOnly: true }); // Set the cookie first
    return res.status(200).json({ token, user }); // Then send the response
};

module.exports.getProfile = async (req, res, next) => {
    return res.status(200).json({ user: req.user });
};

module.exports.logoutUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers['authorization']?.split(' ')[1]; // Get the token first
    if (!token) {
        return res.status(400).json({ message: 'No token provided' });
    }

    res.clearCookie('token'); // Clear the cookie after storing the token
    await blackList.create({ token }); // Blacklist the token
    return res.status(200).json({ message: 'Logged out' });
};