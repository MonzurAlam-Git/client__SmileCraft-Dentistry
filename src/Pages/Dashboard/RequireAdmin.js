import React from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import UseAdmin from '../Hooks/UseAdmin';
import Loading from '../Shared/Loading';


const RequireAdmin = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const [admin, adminLoader] = UseAdmin(user);
    const [signOut] = useSignOut(auth);

    let location = useLocation();

    if (loading || adminLoader) {
        return <Loading></Loading>
    }

    if (!user || !admin) {
        signOut(auth);
        console.log('Signed Out');
        // return <Navigate to="/login" state={{ from: location }} replace ></Navigate>
    }
    return children;
};

export default RequireAdmin;