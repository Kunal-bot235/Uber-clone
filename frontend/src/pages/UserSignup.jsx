// import React from 'react'
// import { Link,useNavigate } from 'react-router-dom'
// import { useState } from 'react'
// import axios from 'axios'
// import {UserDataContext} from '../context/UserContext'
// const UserLogin = () => {

//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [firstName, setFirstName] = useState('')
//     const [lastName, setLastName] = useState('')
//     const [userData, setUserData] = useState([])
//     const navigate=useNavigate()
//     const {user,setUser} = React.useContext(UserDataContext)

//     const submitHandler = async (e) => {
//         e.preventDefault()
//         const newUser = {
//             fullname:{
//                 firstname:firstName,
//                 lastname:lastName
//             },
//             email:email,
//             password:password
//         }
//         const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser)
//         if (response.status===201){
//             const data=response.data
//             setUser(data.user)
//             navigate('/home')
//         }

//         setEmail('')   
//         setFirstName('')
//         setLastName('')     
//         setPassword('')
//     }
//   return (
//     <div className='p-7 flex flex-col h-screen justify-between'>
//         <div>
//         <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"/>
//         <form onSubmit={(e)=>{
//             submitHandler(e)
//         }}>

// <h3 className='text-lg font-medium mb-2'>What's you name?</h3>
//         <div className='flex gap-4 mb-5'>
        
//         <input required
//         className='bg-[#eeeeee] w-1/2  rounded px-4 py-2 border w-full text-lg placeholder:text-base' type='text' placeholder='First Name'
//         value={firstName}
//         onChange={(e) => setFirstName(e.target.value)}
//         />
//         <input required className='bg-[#eeeeee] w-1/2  rounded px-4 py-2 border w-full text-lg placeholder:text-base' type='text' placeholder='LastName'
//         value={lastName}
//         onChange={(e) => setLastName(e.target.value)}
//         />
        
//         </div>
        

//         <h3 className='text-lg font-medium mb-2'>What's you email?</h3>
//         <input required value={email} 
//         onChange={(e) => setEmail(e.target.value)}
//         className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type='email' placeholder='email@example.com'/>
        
//         <h3 className='text-lg font-medium mb-2'>What's your password?</h3>
//         <input required 
        
//         className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type='password' placeholder='password'
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}   
//         />
//         <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base' type='submit'>Register</button>
        
//         <p className='text-center'>Already have an account?<Link to='/login' className='text-blue-600'>Login here</Link></p>
//         </form>
//         </div>
//         <div>
//             <p className='text-[12px] leading-tight'>By continuing, I confirm that I have read and agree to the Terms of Use and Privacy Policy</p>

//         </div>
//     </div>
//   )
// }

// export default UserLogin
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserDataContext } from '../context/UserContext';

const UserSignup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const { setUser } = useContext(UserDataContext);

    const submitHandler = async (e) => {
        e.preventDefault();
        const newUser = {
            fullname: {
                firstname: firstName,
                lastname: lastName,
            },
            email: email,
            password: password,
        };

        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);
            console.log(response);
            if (response.status === 201 || response.status === 200) {
                const data = response.data;
                setUser(data.user);
                localStorage.setItem('token', data.token);
                navigate('/home'); 
            }
        } catch (error) {
            console.error('Error during registration:', error);
            if (error.response && error.response.status === 400) {
                setErrorMessage(error.response.data.message || 'User already registered');
            } else {
                setErrorMessage('Something went wrong. Please try again.');
            }
        }

        // Reset form fields
        setEmail('');
        setFirstName('');
        setLastName('');
        setPassword('');
    };

    return (
        <div className="p-7 flex flex-col h-screen justify-between">
            <div>
                <img
                    className="w-16 mb-10"
                    src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
                    alt="Uber Logo"
                />
                {errorMessage && <p className="text-red-500 text-center mb-3">{errorMessage}</p>}
                <form onSubmit={(e) => submitHandler(e)}>
                    <h3 className="text-lg font-medium mb-2">What's your name?</h3>
                    <div className="flex gap-4 mb-5">
                        <input
                            required
                            className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <input
                            required
                            className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>

                    <h3 className="text-lg font-medium mb-2">What's your email?</h3>
                    <input
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                        type="email"
                        placeholder="email@example.com"
                    />

                    <h3 className="text-lg font-medium mb-2">What's your password?</h3>
                    <input
                        required
                        className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base"
                        type="submit"
                    >
                        Register
                    </button>

                    <p className="text-center">
                        Already have an account? <Link to="/login" className="text-blue-600">Login here</Link>
                    </p>
                </form>
            </div>
            <div>
                <p className="text-[12px] leading-tight">
                    By continuing, I confirm that I have read and agree to the Terms of Use and Privacy Policy
                </p>
            </div>
        </div>
    );
};

export default UserSignup;