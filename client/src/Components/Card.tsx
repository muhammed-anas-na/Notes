import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../Redux/NoteSlice';

export default function Card({heading , value}){
    const [headingName] = useState(heading);
    const [valueName] = useState(value)
    const dispatch = useDispatch();

    const handleClick =()=>{
        dispatch(addNote({heading:heading , value:value}))
    }

    return (
        <div className='border border-teal-100 p-5 w-[20vw] h-[20vh] cursor-pointer' onClick={handleClick}>
            <h1 
            dangerouslySetInnerHTML={{ __html:headingName.length > 14? headingName.slice(0,14) + "..." : headingName }}
            className='text-2xl font-bold break-words'
            />            
            <h1 
            dangerouslySetInnerHTML={{ __html:valueName.length > 30? headingName.slice(0,30) + "..." : valueName }} 
            className='break-words'
            />
        </div>
    )
}