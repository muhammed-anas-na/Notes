import axiosInstance from "../axiosInstance"
import { UPDATE_NOTE_API } from "../endpoints/common";

export const UPDATE_NOTE_FN = async(data: object)=>{
    try{
        return axiosInstance.put(UPDATE_NOTE_API , data)
    }catch(err){
        return err;
    }
}