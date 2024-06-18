
import mongoose from "mongoose";
import {DB_NAME} from "../constant.js"


const connectDB = async ()=>{
    try{
       await mongoose.connect(`mongodb+srv://tm943359:tanmay123@cluster0.bgykeyo.mongodb.net/${DB_NAME}`);
       console.log(`MongoDB connected`);
    }
    catch(error){
        console.log("ERROR: ", error);
        throw err
    }
}

export default connectDB;