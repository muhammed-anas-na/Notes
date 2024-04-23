import { postInterface, updatePostInterface } from "../../../../libs/entities/postEntities"
import { post } from "../models/postModel"

export default {
    createPost:async(data: postInterface)=>{
        const newPost = new post({
            heading : data.heading,
            value: data.value,
            email: data.email,
        })
        return newPost.save();
    },

    getUserNotesByEmail: async(email: string)=>{
        return post.find({email:email});
    },
    updateNotes:async(data: updatePostInterface)=>{
        return post.findByIdAndUpdate(data.noteId , {
            heading: data.heading,
            value: data.value,
        }, {new: true})
    }
}