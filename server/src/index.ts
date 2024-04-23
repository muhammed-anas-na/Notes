import expressServer from "./framework/express";
import dependencies from "./config/dependencies";
import dotenv from 'dotenv'
import { ConnecToMongoDB } from "./config/mongodbConfig";
dotenv.config()
try{
    ConnecToMongoDB()
    expressServer(dependencies)
}catch(err){
    console.log("Error while starting the express server" , err)
}