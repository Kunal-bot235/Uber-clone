// import React,{ useContext,useEffect} from 'react'
// import { UserDataContext } from '../context/UserContext'
// import { useNavigate } from 'react-router-dom'
// const UserProtectWrapper = ({children}) => {


//     const token = localStorage.getItem('token')
//     const navigate = useNavigate()
//     useEffect(() => {
//       if (!token) {
//         navigate('/login');
//       } else {
//         const userType = localStorage.getItem('userType');
//         if (userType !== 'user') {
//           navigate('/login');
//         }
//       }
//     }, [token, navigate]);
//   return (
//     <>
//     {children}
//     </>
//   )
// }

// export default UserProtectWrapper
import React, { useContext, useEffect, useState } from 'react';
import { UserDataContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserProtectWrapper = ({ children }) => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const { setUser } = useContext(UserDataContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // If no token exists, redirect to login immediately
        if (!token) {
            navigate('/login');
            return;
        }

        // Validate the token and fetch user profile
        const validateToken = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.status === 200 || response.status === 201) {
                    setUser(response.data.user); // Set user data in context
                    setIsLoading(false); // Stop loading
                }
            } catch (error) {
                console.error('Error validating token:', error);
                localStorage.removeItem('token'); // Remove invalid token
                navigate('/login'); // Redirect to login
                setIsLoading(false); // Stop loading
            }
        };

        validateToken();
    }, [token, navigate, setUser]);

    // Show a loading screen while validating the token
    if (isLoading) {
        return <div>Loading...</div>;
    }

    // Render children if token is valid
    return <>{children}</>;
};

export default UserProtectWrapper;