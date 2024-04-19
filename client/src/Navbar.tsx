import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {auth} from './firebase'
import {useDispatch , useSelector} from 'react-redux'
import { addUser, clearUser } from "./Redux/UserSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const userData = useSelector((store) => store.user.userData)
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  
  useEffect(()=>{
    if(userData.displayName){
      setIsLogin(true);
      navigate('/dashboard')
    }
  } , [userData , isLogin])

  const dispatch = useDispatch();
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      console.log("HIHIHIHI")
      const result = await signInWithPopup(auth, provider);
      console.log("Result ==> ",result.user);
      const {displayName , email , photoURL} = result.user;
      const userObject = {
        displayName,
        email,
        photoURL,
      }
      dispatch(clearUser());
      dispatch(addUser(userObject));
      setIsLogin(true);
    } catch (error) {
      console.error("Error");
    }
  };
  
  const signOut = () => {
    dispatch(clearUser())
    setIsLogin(false);
    navigate('/')
  };

  return (
    <div className="flex justify-between items-center p-5 bg-backgroundYellow">
      <div>
        <h1 className="text-5xl font-extrabold text-baseTextColor">Notes</h1>
      </div>

      <div className="flex gap-5 font-light">
        <h1>Home</h1>
        <h1>Feature</h1>
        <h1>FAQs</h1>
        <h1>About</h1>
      </div>

      <div className="flex gap-5 items-center">
        {
          isLogin == false ? (
            <><div
            className="border border-baseTextColor rounded-full"
          >
            <h1 className="font-extralight text-sm px-5 py-1.5">Sign Up</h1>
          </div>
            <button
            onClick={signInWithGoogle}
              className="text-white bg-baseTextColor rounded-full"
            >
              <h1 className="font-extralight text-sm px-5 py-1.5">Sign In</h1>
            </button>
            </>
          ) :(
            <button
            onClick={signOut}
              className="text-white bg-baseTextColor rounded-full"
            >
              <h1 className="font-extralight text-sm px-5 py-1.5">Sign Out</h1>
            </button>
          )
        }
      </div>
    </div>
  );
}
