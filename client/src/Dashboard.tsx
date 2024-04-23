import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FETCH_USER_NOTES_FN } from "./Axios/methods/GET";
import Card from "./Components/Card";
import { responseInterface , Note } from "./Interface/common";
import { useSelector } from "react-redux";
export default function Dashboard() {
  const currentUser = useSelector(store => store.user.userData)
  const [notes, setNotes] = useState<Note[]>([]);
  const [userData , setUserData] = useState();
  const fetchUserNotes = async () => {
    const response = (await FETCH_USER_NOTES_FN()) as responseInterface;
    // const responseData = response as responseInterface
    console.log("User notes", response.data);
    setNotes(response.data);
  };
  useEffect(() => {
    fetchUserNotes();
    setUserData(currentUser);
  }, []);
  console.log(userData)
  return (
    <div className="bg-backgroundYellow h-[85vh]">
      <div className="flex justify-between mx-28 py-10">
        <h1 className="text-3xl font-extrabold">Hey </h1>
        <button className="text-white bg-baseTextColor rounded-full">
          <Link to="/create-note">
            <h1 className="font-extralight text-sm px-5 py-1.5">+New Notes</h1>
          </Link>
        </button>
      </div>
      <div className="flex mx-28">
        <img
          width={"280px"}
          src="https://raw.githubusercontent.com/RaddyTheBrand/Notes-NodeJs-CRUD-MongoDB/8035f76e7b9a106c981fde8ef32dc3cf363260bf/public/img/human-3.svg"
          alt="person03"
        />
        <div>
          {notes.length == 0 ? (
            <>
              <h1 className="text-4xl font-extrabold">
                Let's start with your first note!
              </h1>
              <Link
                to={"/create-note"}
                className="text-2xl text-blue-500 font-thin hover:underline"
              >
                Create One
              </Link>
            </>
          ) : (
            <div className="flex gap-5 flex-wrap">
              {notes.map(
                (value: { heading: string; value: string; _id: string }) => {
                  return (
                    <Link to={`/view-note/${value._id}`}>
                      <Card
                        key={value._id}
                        heading={value.heading}
                        value={value.value}
                      />
                    </Link>
                  );
                }
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
