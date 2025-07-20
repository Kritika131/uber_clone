import captainModel from "../models/captain.model.js";

export async function createCaptain({firstname, lastname, email, password, vehicleType, color, plate, capacity}) {
    try {
        console.log("Creating captain with data:@@@@", {
            firstname,
            lastname,
            email,
            password,
            vehicleType,
            color,
            plate,
            capacity
        });
        if(!firstname || !lastname || !email || !password || !vehicleType || !color || !plate || !capacity) {
            console.error("All fields are required");
            throw new Error("All fields are required");
        }
       const captain = await captainModel.create({
    fullname: {
      firstname,
      lastname,
    },
    email,
    password,
    vehicle: {
      vehicleType,
      color,
      plate,
      capacity,
    },
  });
        console.log("Captain created successfully:", captain);
        return captain;
    } catch (error) {
        throw new Error(`Error creating captain: ${error.message}`);
    }
}