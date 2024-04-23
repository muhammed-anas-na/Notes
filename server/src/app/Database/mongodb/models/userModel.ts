import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    displayName:{
        type: String,
        required: true,
    },

    email:{
        type: String,
        required: true,
    },

    photoURL:{
        type: String,
        required: true
    }
})

const user = mongoose.model('users' , userModel);
export {user}