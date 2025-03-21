import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const UserLogin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [captainData, setCaptainData] = useState([])

    const submitHandler = (e) => {
        e.preventDefault()
        setCaptainData({email:email, password:password})
        console.log(userData)
        setEmail('')        
        setPassword('')
    }
  return (
    <div className='p-7 flex flex-col h-screen justify-between'>
        <div>
        <img className='w-20 mb-3' src="https://pngimg.com/d/uber_PNG24.png"/>
        <form onSubmit={(e)=>{
            submitHandler(e)
        }}>
        <h3 className='text-lg font-medium mb-2'>What's you email?</h3>
        <input required value={email} 
        onChange={(e) => setEmail(e.target.value)}
        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type='email' placeholder='email@example.com'/>
        <h3 className='text-lg font-medium mb-2'>What's your password?</h3>
        <input required 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type='password' placeholder='password'/>
        <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base' type='submit'>Login</button>
        
        <p className='text-center'>Join a fleet?<Link to='/captain-signup' className='text-blue-600'>Register as a Captain</Link></p>
        </form>
        </div>
        <div>
            <Link to='/login' className='bg-[#d5622d] flex item-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base'>
                Sign in as a User
            </Link>
        </div>
    </div>
  )
}

export default UserLogin