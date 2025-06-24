import captainModel from "../models/captain.model.js";

export async function createCaptain({firstname, lastname, email, password, vehicleType, color, plate, capacity}) {
    try {
        if(!firstname || !lastname || !email || !password || !vehicleType || !color || !plate || !capacity) {
            throw new Error("All fields are required");
        }
        const captain = captainModel.create({
            fullname: {
                firstname,
                lastname
            },
            email,
            password,
            vehicle: {
                color,
                plate,
                capacity,
                vehicleType
            }
        });
        await captain.save();
        return captain;
    } catch (error) {
        throw new Error(`Error creating captain: ${error.message}`);
    }
}