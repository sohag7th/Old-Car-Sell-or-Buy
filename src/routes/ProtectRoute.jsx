import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';
import Loading from '../shared/Loading';

const ProtectRoute = ({children}) => {

    const { user, loadingUser } = useContext(AuthContext)
     
    const location = useLocation();

    if(loadingUser){
        return <Loading></Loading>
    }

    if(!user){
        return <Navigate to="/login" state={{ from : location }} replace></Navigate>
    }
    return children;
};

export default ProtectRoute;
