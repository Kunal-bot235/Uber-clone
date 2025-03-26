import React from 'react'

const RidePopup = (props) => {
  return (
    <div>
        <h5 
        onClick={()=>
          props.setRidePopupPanel(false)}
        className='p-1 text-center w-[93%] absolute top-0'>
        <i className='ri-arrow-down-wide-line text-3xl text-gray-200'></i>
        </h5>
        <h3 className='text-xl font-semibold mb-5'>New Ride Available!</h3>
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
          <div className='flex mt-5 w-full item-center justify-between'>
          <button 
          onClick={()=>{
            props.setRidePopupPanel(false)
            
          }
          
          }
          className='bg-gray-300 text-gray-700 font-semibold p-3 px-10 rounded-lg'>Ignore</button>
          <button 
          onClick={()=>{
            
            props.setConfirmRidePopupPanel(true)
          }
          
          }
          className='bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>Accept</button>
          
          </div>
    </div>
    </div>
  )
}

export default RidePopup