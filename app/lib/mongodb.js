import mongoose from "mongoose";

export const connectMONGODB = async() => {
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("CONNECTED")
    }catch(error){
        console.log("ERROR: ", error);
    }
}