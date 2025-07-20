import { validationResult } from "express-validator";
import { createCaptain } from "../services/captain.service.js";
import captainModel from "../models/captain.model.js";
import blacklistTokenModel from "../models/blacklistToken.model.js";

export async function registerCaptain(req, res, next) {
  const errors = validationResult(req);
  console.log("Registering captain with data:",req.body);
  console.log("Validation errors:", errors.array());
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array(),message:errors.array()[0].msg });
  }
  try {
    const { fullname, email, password, vehicle } = req.body;
    // console.log("Registering captain with data:",req.body);
    const isCaptainExists = await captainModel.findOne({ email });
    console.log("isCaptainExists:", isCaptainExists);
    if (isCaptainExists) {
      return res.status(400).json({errors:true, message: "Captain already exists" });
    }
    const hashedPassword = await captainModel.hashPassword(password);
    console.log("Hashed password:", hashedPassword);
    const captain = await createCaptain({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashedPassword,
      vehicleType: vehicle.vehicleType,
      color: vehicle.color,
      plate: vehicle.plate,
      capacity: vehicle.capacity,
    });
    const token = captain.generateAuthToken();
    console.log("Generated token:", token);
    console.log("captaio token:", captain);

    return res.status(201).json({ token, captain });
  } catch (error) {
    next(error);
  }
}

export async function loginCaptain(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const { email, password } = req.body;
    const captain = await captainModel.findOne({ email }).select("+password");
    console.log("Logging in captain with email:", email);
    console.log("Found captain:", captain);
    if (!captain) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const isMatch = await captain.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const token = captain.generateAuthToken();
    res.cookie("token", token);
    return res.status(200).json({ token, captain });
  } catch (error) {
    next(error);
  }
}

export async function getCaptainProfile(req, res, next) {
  const captain = req.captain;
  console.log("Fetching captain profile:", captain);
  if (!captain) {
    return res.status(404).json({ message: "Captain not found" });
  }
  return res.status(200).json(captain);
}

export async function logoutCaptain(req, res) {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  await blacklistTokenModel.create({ token });
  res.clearCookie("token");
  return res.status(200).json({ message: "Logged out successfully" });
}
