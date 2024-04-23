import mongoose from 'mongoose';

export const ConnecToMongoDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI!)
        console.log("Notes connected to MONGODB");
    }catch(err){
        console.log("Error connection" , err)
    }
}