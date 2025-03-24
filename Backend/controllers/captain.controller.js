const captainModel=require('../models/captain.model');
const captainService=require('../services/captain.services');
const {validationResult}=require('express-validator');
const blackListTokenModel=require('../models/blacklistToken.model');

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

     const hashedPassword=await captainModel.hashedPassword(password);
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

module.exports.loginCaptain = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;
        
        const captain = await captainModel.findOne({ email }).select('+password');
        
        if (!captain) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const isMatch = await captain.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = captain.generateAuthToken();

        // ✅ Set cookie before response
        res.cookie('token', token, { httpOnly: true, secure: true, maxAge: 24 * 60 * 60 * 1000 });

        // ✅ Then send response
        return res.status(200).json({ token, captain });

    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports.getCaptainProfile = async (req, res, next) => {
    try {
        const captain = req.captain; // Assuming `authCaptain` middleware sets `req.captain`
        if (!captain) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        res.status(200).json({ captain });
    } catch (error) {
        console.error('Error fetching captain profile:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
module.exports.logoutCaptain=async (req,res,next) =>{
    const token=req.cookies.token || req.headers.authorization?.split(' ')[1];
    await blackListTokenModel.create({token});
    res.clearCookie('token');
    res.status(200).json({message:'Logout successfully'});
}
