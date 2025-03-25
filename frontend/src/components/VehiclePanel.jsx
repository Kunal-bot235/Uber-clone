import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
        <h5 
        onClick={()=>
          props.setVehiclePanel(false)}
        className='p-1 text-center w-[93%] absolute top-0'>
        <i className='ri-arrow-down-wide-line text-3xl text-gray-200'></i>
        </h5>
        <h4 className='text-2xl font-semibold mb-5'>Choose a Ride</h4>
        <div 
        onClick={()=>{
          props.setConfirmRidePanel(true)
          
        }}
        className='flex border-2 active:border-black mb-2 rounded-xl p-3 w-full item-center justify-between'>
          <img className='h-12'src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1712027307/assets/42/eb85c3-e2dc-4e95-a70d-22ee4f08015f/original/Screenshot-2024-04-01-at-9.08.07p.m..png'></img>
        
          <div className='w-1/2 ml-2'>
          <h4 className='font-medium text-lg'>UberGO<span><i className='ri-user-3-fill'></i>4</span></h4>
          <h5 className='font-medium text-sm'>2 mins away</h5>
          <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
          </div>
          <h2 className='text-lg font-semibold'>₹193.20</h2>
          </div>
          
          <div 
          onClick={()=>{
            props.setConfirmRidePanel(true)
            
          }}
          className='flex border-2 active:border-black mb-2 rounded-xl p-3 w-full item-center justify-between'>
          <img className='h-12'src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648177797/assets/fc/ddecaa-2eee-48fe-87f0-614aa7cee7d3/original/Uber_Moto_312x208_pixels_Mobile.png'></img>
        
          <div className='w-1/2 -ml-2'>
          <h4 className='font-medium text-lg'>UberMoto<span><i className='ri-user-3-fill'></i>1</span></h4>
          <h5 className='font-medium text-sm'>3 mins away</h5>
          <p className='font-normal text-xs text-gray-600'>Affordable, Motorcycle rides</p>
          </div>
          <h2 className='text-lg font-semibold'>₹65</h2>
          </div>

          <div  
          onClick={()=>{
            props.setConfirmRidePanel(true)
            
          }}
          className='flex border-2 active:border-black mb-2 rounded-xl p-3 w-full item-center justify-between'>
          <img className='h-12'src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png'></img>
        
          <div className='w-1/2 ml-2'>
          <h4 className='font-medium text-lg'>UberAuto<span><i className='ri-user-3-fill'></i>3</span></h4>
          <h5 className='font-medium text-sm'>4 mins away</h5>
          <p className='font-normal text-xs text-gray-600'>Affordable, Auto rides</p>
          </div>
          <h2 className='text-lg font-semibold'>₹118.68</h2>
          </div>
    </div>
  )
}

export default VehiclePanel