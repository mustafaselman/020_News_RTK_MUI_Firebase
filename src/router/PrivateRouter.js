import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../context/AuthContext";



const PrivateRouter = () => {
    const location = useLocation();
    const post = location.state.posts
    const user =  useContext(UserContext);
    
    return user ? window.location.href=post.url : (
        <Navigate to="/login" replace/>
        
        
    )
    
  };

  export default PrivateRouter;