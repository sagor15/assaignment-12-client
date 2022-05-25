import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import UseAdmin from '../../../hooks/UseAdmin';
import Loading from '../../Shared/Loading';

const AdminRequire = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const [admin,adminLogin] = UseAdmin(user);
    const location = useLocation();
    if(loading || adminLogin){
        return <Loading></Loading>
    }
    if(!user || !admin){
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default AdminRequire;