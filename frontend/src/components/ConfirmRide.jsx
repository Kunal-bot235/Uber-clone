import React from 'react'


const ConfirmRide = (props) => {
  return (
    <div>
      <h5 
        onClick={()=>
          props.setVehiclePanel(false)}
        className='p-1 text-center w-[93%] absolute top-0'>
        <i className='ri-arrow-down-wide-line text-3xl text-gray-200'></i>
        </h5>
        <h3 className='text-xl font-semibold mb-5'>Confirm your Ride</h3>

        <div className='flex gap-2 justify-between flex-col item-center'>
        <img className='h-22'src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1652995234/assets/92/8d4288-e896-4333-9bc2-c60c49f2a095/original/UberXL_Black_v2.png'></img>
        </div>
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
          <button 
          onClick={()=>{
            
            props.setVehicleFound(true)
            props.setConfirmRidePanel
            (false)
          }
          
          }
          className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Confirm</button>
    </div>
  )
}

export default ConfirmRide