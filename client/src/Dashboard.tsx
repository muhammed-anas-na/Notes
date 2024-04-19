import { Link } from "react-router-dom";

export default function Dashboard(){
    return(
        <div className="bg-backgroundYellow h-[85vh]">
            <div className="flex justify-between mx-28 py-10">
                <h1 className="text-3xl font-extrabold">Hey Anas</h1>
                <button
              className="text-white bg-baseTextColor rounded-full"
            >
              <h1 className="font-extralight text-sm px-5 py-1.5">+New Notes</h1>
            </button>
            </div>
            <div className="flex mx-28">
              <img width={'280px'} src="https://raw.githubusercontent.com/RaddyTheBrand/Notes-NodeJs-CRUD-MongoDB/8035f76e7b9a106c981fde8ef32dc3cf363260bf/public/img/human-3.svg" alt="person03" />
              <div>
                <h1 className="text-4xl font-extrabold">Let's start with your first note!</h1>
                <Link to={'/create-note'} className="text-2xl text-blue-500 font-thin hover:underline">Create One</Link>
              </div>
            </div>
        </div>
    )
}