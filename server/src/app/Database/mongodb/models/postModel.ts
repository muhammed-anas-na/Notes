import mongoose from "mongoose";

const postModel = new mongoose.Schema({
    heading:{
        type: String,
        required: true,
    },

    value:{
        type: String,
        required: true,
    },

    email:{
        type: String,
        required: true
    }
})

const post = mongoose.model('posts' , postModel);
export {post}