import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const PrivateRoute = ({ children }) => {

    // user (er ki ki info check krbo ta) ase naki nai check krbo
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    // loging hole sprier show hobe
    if (loading) {
        return (
            <h2>Loading...</h2>
            // <progress className="progress w-56"></progress>
        );
    }

    // user & user er uid jodi thake tahole PrivateRoute er children jara thakbe tader access korte dibo
    if (user && user.uid) {
        return children;
    }

    // na thakle oi specific routes a gele login page a niye jabe
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;