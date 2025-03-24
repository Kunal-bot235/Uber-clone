import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const CaptainLogout = () => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    axios.get(`${import.meta.env.VITE_API_URL}/captain/logout`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    }).then((response)=>{
        if (response.status === 200 || response.status === 201) {
            localStorage.removeItem('token')
            navigate('/captain-login')
        }
        
        
    }
    ).catch((error)=>{
        console.log(error)
    })
  return (
    <div>Captain Logout</div>
  )
}
export default CaptainLogout
