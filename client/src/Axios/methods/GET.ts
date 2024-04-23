import axiosInstance from "../axiosInstance"
import { FETCH_USER_NOTES_API, GET_NOTE_DATA_API } from "../endpoints/common"

export const FETCH_USER_NOTES_FN=async()=>{
    try{
        return axiosInstance.get(FETCH_USER_NOTES_API)
    }catch(err){
        return err;
    }
}

export const GET_NOTE_DATA_FN = async(noteId: string | undefined)=>{
    try{
        return axiosInstance.get(GET_NOTE_DATA_API+ `/${noteId}}`)
    }catch(err){
        return err;
    }
}