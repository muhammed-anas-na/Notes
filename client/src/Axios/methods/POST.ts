import axiosInstance from "../axiosInstance";
import { CREATE_POST_API } from "../endpoints/common";

export const CREATE_POST_FN = async(data: object)=>{
    try{
        return axiosInstance.post(CREATE_POST_API , data)
    }catch(err){
        return err;
    }
}