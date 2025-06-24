import mongoose from "mongoose";

function connectToDB(){
  console.log("Connecting to MongoDB...", process.env.MONGODB_URI);
    mongoose.connect(process.env.MONGODB_URI).then(()=>
      console.log("Connected to MongoDB successfully!")
    ).catch(err => {
        console.error("Error connecting to MongoDB:", err);
        process.exit(1); // Exit the process if connection fails
    });
   
}
export default connectToDB;