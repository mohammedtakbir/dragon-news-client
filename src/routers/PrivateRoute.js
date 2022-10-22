import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import Spinner from 'react-bootstrap/Spinner';

/* 
* 1. only allow authenticated user to visit the route
* 2. 
* 3. redirect user to the route they wanted to go before login 
*/

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <div className='d-flex justify-content-center mt-5'><Spinner animation="border" variant="success" /></div>
    }
    if(!user){
        return <Navigate to='/login' state={{from: location}} replace /> //? replace--> login url ke history thika delete kore dibe
        //? ekhane /news/:id theke je url astese setake state er maddhome object akare login component e pathano hoise
        //? login component er location e ei state set hoise tai login er location theke state er pathname nite hobe
    }
    return children;
};

export default PrivateRoute;