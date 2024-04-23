import { user } from "../models/userModel"
import { userData } from "../../../../libs/entities"

export default {
    createUser:async(data: userData)=>{
        const newUser = new user({
            displayName : data.displayName,
            email: data.email,
            photoURL: data.photoURL
        })
        await newUser.save();
        return newUser;
    },

    findByEmail:async(data: userData)=>{
        return user.findOne({email: data.email});
    },

}