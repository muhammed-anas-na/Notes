import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({children}){
    const userData = useSelector(store => store.user.userData);
    const navigate = useNavigate();
    useEffect(() => {
        if (!userData.displayName) {
          navigate('/');
        }
      }, [userData.displayName, navigate])
      return <>{children}</>;
}