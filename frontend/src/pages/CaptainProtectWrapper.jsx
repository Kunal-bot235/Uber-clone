import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CaptainDataContext } from '../context/CaptainContext';

const CaptainProtectWrapper = ({ children }) => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const { setCaptain } = useContext(CaptainDataContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // If no token exists, redirect to login immediately
        if (!token) {
            navigate('/captain-login');
            return;
        }

        // Validate the token and fetch captain profile
        const validateToken = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.status === 200 || response.status === 201) {
                    setCaptain(response.data.captain); // Set captain data in context
                    setIsLoading(false); // Stop loading
                }
            } catch (error) {
                console.error('Error validating token:', error);
                localStorage.removeItem('token'); // Remove invalid token
                navigate('/captain-login'); // Redirect to login
                setIsLoading(false); // Stop loading
            }
        };

        validateToken();
    }, [token, navigate, setCaptain]);

    // Show a loading screen while validating the token
    if (isLoading) {
        return <div>Loading...</div>;
    }

    // Render children if token is valid
    return <>{children}</>;
};

export default CaptainProtectWrapper;