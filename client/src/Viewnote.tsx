import { Link } from "react-router-dom";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import { useState , useEffect } from "react";
import { EventInterface, responseInterface } from "./Interface/common";
import { useSelector } from "react-redux";
// import { RootState } from "./Redux/store";
import { useParams } from "react-router-dom";
import { UPDATE_NOTE_FN } from "./Axios/methods/PUT";
import {useNavigate} from 'react-router-dom'

export default function Viewnote(){
    const noteData = useSelector((store) => store.note.noteData);
    const {noteId} = useParams();
    const [value, setValue] = useState('');
    const [heading , setHeading] = useState('')
    const navigate = useNavigate()
    const changeHeading = (e: EventInterface)=>{
        setHeading(e.target.value)
    }
    const handleUpdate =async()=>{
        try{
            await UPDATE_NOTE_FN({heading , value , noteId}) as responseInterface
            navigate('/dashboard')
        }catch(err){
            console.log("Error while updating" , err);
        }
    }
    useEffect(()=>{
        setValue(noteData.value)
        setHeading(noteData.heading)
    },[])

    return(
        <div className="bg-backgroundYellow h-[85vh]">
            <div className="mx-28">
                <h1 className="text-xl font-extralight py-5"><Link to="/dashboard" className="text-blue-300">Dashboard</Link> / Edit Notes</h1>
                <input className="text-3xl font-bold bg-backgroundYellow outline-none" value={heading} onChange={changeHeading} />
            </div>

            <div className="mx-28 relative mt-3">
                <ReactQuill value={value} onChange={setValue} className="h-[50vh]"/>;
                <button
                    className="text-white bg-baseTextColor rounded-full absolute  right-5"
                >
                <h1 className="font-extralight text-sm px-5 py-1.5" onClick={handleUpdate}>Update Note</h1>
                </button>
            </div>  


        </div>
    )
}