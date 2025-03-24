import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const CaptainSignup = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userData, setUserData] = useState([])

    const [vehicleColor, setVehicleColor] = useState('');
    const [vehiclePlate, setVehiclePlate] = useState('');
    const [vehicleCapacity, setVehicleCapacity] = useState('');
    const [vehicleType, setVehicleType] = useState('');

    const {captain, setCaptain} = React.useContext(CaptainDataContext)

    // const submitHandler = async (e) => {
    //     e.preventDefault()
    //     const captainData=({
    //         fullname:{
    //             firstname:firstName,
    //             lastname:lastName
    //         },
    //         email:email,
    //         password:password,
    //         vehicle:{
    //             color: vehicleColor,
    //             plate: vehiclePlate,
    //             capacity: vehicleCapacity,
    //             vehicleType: vehicleType
    //         }

    //     })
    //     const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`,captainData)
    //     if (response.status === 200 || response.status === 201) {
    //         const data=response.data
    //         setCaptain(response.data.captain)
    //         localStorage.setItem('token',response.data.token)
    //         navigate('/captain-home')
    //     }
    //     setEmail('')   
    //     setFirstName('')
    //     setLastName('')     
    //     setPassword('')
    //     setVehicleColor('')
    //     setVehiclePlate('')
    //     setVehicleCapacity('')
    //     setVehicleType('')
    // }
    const submitHandler = async (e) => {
        e.preventDefault();
        const captainData = {
            fullname: {
                firstname: firstName,
                lastname: lastName,
            },
            email: email,
            password: password,
            vehicle: {
                color: vehicleColor,
                plate: vehiclePlate,
                capacity: vehicleCapacity,
                vehicleType: vehicleType,
            },
        };
    
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);
    
            if (response.status === 200 || response.status === 201) {
                setCaptain(response.data.captain); // Set captain data in context
                localStorage.setItem('token', response.data.token); // Store token in localStorage
                navigate('/captain-home'); // Navigate to captain home
            }
        } catch (error) {
            console.error('Error during signup:', error);
            alert(error.response?.data?.message || 'Something went wrong. Please try again.');
        }
    
        setEmail('');
        setFirstName('');
        setLastName('');
        setPassword('');
        setVehicleColor('');
        setVehiclePlate('');
        setVehicleCapacity('');
        setVehicleType('');
    };
  return (
    <div className='p-7 flex flex-col h-screen justify-between'>
        <div>
        <img className='w-16 mb-10' src="https://pngimg.com/d/uber_PNG24.png"/>
        <form onSubmit={(e)=>{
            submitHandler(e)
        }}>

<h3 className='text-lg font-medium mb-2'>What's you name?</h3>
        <div className='flex gap-4 mb-5'>
        
        <input required
        className='bg-[#eeeeee] w-1/2  rounded px-4 py-2 border w-full text-lg placeholder:text-base' type='text' placeholder='First Name'
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        />
        <input required className='bg-[#eeeeee] w-1/2  rounded px-4 py-2 border w-full text-lg placeholder:text-base' type='text' placeholder='LastName'
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        />
        
        </div>
        

        <h3 className='text-lg font-medium mb-2'>What's you email?</h3>
        <input required value={email} 
        onChange={(e) => setEmail(e.target.value)}
        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type='email' placeholder='email@example.com'/>
        
        <h3 className='text-lg font-medium mb-2'>What's your password?</h3>
        <input required 
        
        className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type='password' placeholder='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}   
        />

        <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>

        <div className='flex gap-4 mb-5'>
            <input required
                className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
                type='text' 
                placeholder='Vehicle Color'
                value={vehicleColor}
                onChange={(e) => setVehicleColor(e.target.value)}
            />
            <input required
                className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
                type='text' 
                placeholder='Vehicle Plate'
                value={vehiclePlate}
                onChange={(e) => setVehiclePlate(e.target.value)}
            />
        </div>

        <div className='flex gap-4 mb-5'>
            <input required
                className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
                type='number' 
                placeholder='Vehicle Capacity'
                value={vehicleCapacity}
                onChange={(e) => setVehicleCapacity(e.target.value)}
            />
            <select required
                className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
            >
                <option value='' disabled>Select Vehicle Type</option>
                <option value='car'>Car</option>
                <option value='auto'>Auto</option>
                <option value='moto'>Moto</option>
            </select>
        </div>
        <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base' type='submit'>Create Captain Account</button>
        
        <p className='text-center'>Already have an account?<Link to='/captain-login' className='text-blue-600'>Login here</Link></p>
        </form>
        </div>
        <div>
            <p className='text-[12px] leading-tight'>By continuing, I confirm that I have read and agree to the <span className='underline'>Terms of Use</span> and <span className='underline'>Privacy Policy</span></p>

        </div>
    </div>
  )
}

export default CaptainSignup