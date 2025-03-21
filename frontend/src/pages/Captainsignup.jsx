import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const UserLogin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userData, setUserData] = useState([])

    const submitHandler = (e) => {
        e.preventDefault()
        setUserData({
            fullName:{
                firstName:firstName,
                lastName:lastName
            },
            email:email,
            password:password
        })
        console.log(userData)
        setEmail('')   
        setFirstName('')
        setLastName('')     
        setPassword('')
    }
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
        <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base' type='submit'>Register</button>
        
        <p className='text-center'>Already have an account?<Link to='/captain-login' className='text-blue-600'>Login here</Link></p>
        </form>
        </div>
        <div>
            <p className='text-[12px] leading-tight'>By continuing, I confirm that I have read and agree to the <span className='underline'>Terms of Use</span> and <span className='underline'>Privacy Policy</span></p>

        </div>
    </div>
  )
}

export default UserLogin