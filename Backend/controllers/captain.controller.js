const captainModel=require('../models/captain.model');
const captainService=require('../services/captain.services');
const {validationResult}=require('express-validator');

module.exports.registerCaptain=async (req,res,next) =>{
    const errors=validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }   
    

    const {fullname,email,password,vehicle}=req.body;
    if(!vehicle || !vehicle.color || !vehicle.plate || !vehicle.capacity || !vehicle.vehicleType){
        return res.status(400).json({message:'All fields required'})

    }

    const isCaptainAlreadyExist=await captainModel.findOne({email})

    if(isCaptainAlreadyExist){
        return res.status(400).json({message:'Captain already exist'})
    }

     const hashedPassword=await captainModel.schema.statics.hashedPassword(password);
     const captain = await captainService.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
        vehicle: {
            color: vehicle.color,
            plate: vehicle.plate,
            capacity: vehicle.capacity,
            vehicleType: vehicle.vehicleType
        }
    });
    const token=captain.generateAuthToken();
    res.status(200).json({token,captain})
}
// module.exports.loginCaptain=async (req,res,next) =>{
//     const errors=validationResult(req);
//     if (!errors.isEmpty()){
//         return res.status(400).json({errors:errors.array()})
//     }
//     const {email,password}=req.body;
//     const captain=await captainModel.findOne({email}).select('+password');
//     if(!captain){
//         return res.status(401).json({message:'Invalid email or password'});
//     }
//     const isMatch=await captain.comparePassword(password);
//     if(!isMatch){
//         return res.status(401).json({message:'Invalid email or password'});
//     }
//     const token=captain.generateAuthToken();
//     res.status(200).json({token,captain});
//     res.cookie('token',token);
// }