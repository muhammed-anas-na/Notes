import axiosInstance from "../axiosInstance";
import { CREATE_ACCOUNT_API, CREATE_POST_API } from "../endpoints/common";

export const CREATE_POST_FN = async(data: object)=>{
    try{
        return axiosInstance.post(CREATE_POST_API , data)
    }catch(err){
        return err;
    }
}

export const CREATE_ACCOUNT_FN = async(data:object)=>{
    try{
        return axiosInstance.post(CREATE_ACCOUNT_API , data);
    }catch(err){
        return err;
    }
}