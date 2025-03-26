import React from 'react'
import { Link } from 'react-router-dom'
import CaptainRiding from '../pages/CaptainRiding'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { useState,useRef } from 'react'

const ConfirmRidePopup = (props) => {
    const [otp, setOtp] = useState('')

    const submitHandler=(e)=>{
        e.preventDefault()
    }

  return (
    <div>
        <h5 
        onClick={()=>
          props.setRidePopupPanel(false)}
        className='p-1 text-center w-[93%] absolute top-0'>
        <i className='ri-arrow-down-wide-line text-3xl text-gray-200'></i>
        </h5>
        <h3 className='text-xl font-semibold mb-5'>Confirm this Ride?</h3>
        <div className='flex item-center justify-between p-3 bg-yellow-400 rounded-lg mt-4'>
            <div className='flex item-center gap-3'>
            <img className='h-12 w-10 rounded-full object-cover'src='https://icon2.cleanpng.com/20240205/xu/transparent-spider-man-close-up-of-spider-man-with-vibrant-detailed-1710885702566.webp'/>
            <h2 className='text-lg font-medium'>Spider Chacha</h2>
            </div>
            <div>
                <h5 className='text-lg font-semibold'>2.2 KM</h5>
            </div>
        </div>
        <div className='flex gap-2 justify-between flex-col item-center'>
        
        <div className='w-full mt-5'>
          <div className='flex items-center gap-2 p-3 border-b-2'>
            <i className='text-lg ri-map-pin-2-fill'></i>
            <div>
              <h3 className='text-lg font-medium'>562/11-A</h3>
              <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Jamshedpur</p>
            </div>
          </div>


          <div className='flex items-center gap-2 p-3 border-b-2'><i className='text-lg ri-map-pin-user-fill'></i>
            <div>
              <h3 className='text-lg font-medium'>562/11-A</h3>
              <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Jamshedpur</p>
            </div></div>
          <div className='flex items-center gap-2 p-3'><i className='text-lg ri-currency-line'></i>
            <div>
              <h3 className='text-lg font-medium'>₹193.20</h3>
              <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
            </div></div>
        </div>
        
          <div className='mt-6 w-full'>
          <form onSubmit={(e)=>{
                submitHandler(e)
          }} >
            <input value={otp}
            onChange={(e)=>
                setOtp(e.target.value)
            }
            className='bg-[#eee] px-6 py-4 font-mono text-lg rounded-lg w-full mt-5' type='text' placeholder='Enter OTP'/>
          <Link to='/captain-riding'
          
          className='w-full text-lg mt-5 bg-green-600 text-white flex justify-center font-semibold p-2 rounded-lg'>Confirm</Link>
          <button 
          onClick={()=>{
            props.setConfirmRidePopupPanel(false)
            props.setRidePopupPanel(false)
          }
          
          }
          className='w-full bg-red-500 text-lg text-white font-semibold p-2 rounded-lg'>Cancel Ride</button>
          </form>
          </div>
    </div>
    </div>
  )
}

export default ConfirmRidePopup