import { Link } from "react-router-dom";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import { useState } from "react";
import {CREATE_POST_FN} from './Axios/methods/POST'
import { EventInterface, responseInterface } from "./Interface/common";


export default function Createnote(){
    const [value, setValue] = useState('');
    const [heading , setHeading] = useState('Heading')

    const changeHeading = (e: EventInterface)=>{
        setHeading(e.target.value)
    }

    const handleCreatePost =async()=>{
        try{
            const response = await CREATE_POST_FN({heading,value}) as responseInterface
            console.log(response)
        }catch(err){
            console.log("Error")
        }
    }

    return(
        <div className="bg-backgroundYellow h-[85vh]">
            <div className="mx-28">
                <h1 className="text-xl font-extralight py-5"><Link to="/dashboard" className="text-blue-300">Dashboard</Link> / Add Notes</h1>
                <input className="text-3xl font-bold bg-backgroundYellow outline-none" value={heading} onChange={changeHeading} />
            </div>

            <div className="mx-28 relative mt-3">
                <ReactQuill value={value} onChange={setValue} className="h-[50vh]"/>;
                <button
                    className="text-white bg-baseTextColor rounded-full absolute  right-5"
                    onClick={handleCreatePost}
                >
                <h1 className="font-extralight text-sm px-5 py-1.5">+Add Notes</h1>
                </button>
            </div>  


        </div>
    )
}