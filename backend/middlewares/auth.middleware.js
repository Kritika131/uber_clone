// import userModel from "../models/user.model.js";
import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";
import blacklistTokenModel from "../models/blacklistToken.model.js";
import captainModel from "../models/captain.model.js";

export async function authUser(req,res,next){
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1]
    if(!token){
        return res.status(401).json({message:"Unauthorized"})
    }

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);
        if(!user){
            return res.status(401).json({message:"Unauthorized"})
        }
        const isBlacklisted = await blacklistTokenModel.findOne({ token });
        if(isBlacklisted){
            return res.status(401).json({message:"Unauthorized"})
        }
        req.user = user;
        return next();
    }catch(err){
        return res.status(401).json({message:"Unauthorized"})
    }
}

export async function authCaptain(req,res,next){
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1]
    if(!token){
        return res.status(401).json({message:"Unauthorized"})
    }

    const isBlacklisted = await blacklistTokenModel.findOne({ token });
    if(isBlacklisted){
        return res.status(401).json({message:"Unauthorized"})
    }

    try{

        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id);
        if(!captain){
            return res.status(401).json({message:"Unauthorized"})
        }
        req.captain = captain;
        return next();
    }catch(err){
        return res.status(401).json({message:"Unauthorized"})
    }
}