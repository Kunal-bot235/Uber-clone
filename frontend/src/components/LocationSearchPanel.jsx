import React from 'react'

const LocationSearchPanel = (props) => {
    
    const locations=[
        "K5-18, Cross Road 10, Steel Plant, Hyderabadr",
        "K2-25, Cross Road 20, Ghodabandha, Banglore",
        "G2-18, Road No.4, Telco Colony, Bhubaneswar",
        "P4F, Cross Road 4, Sonari, Jamshedpur",
    ]




  return (
    <div>
        {/* This is just a sample data */}

        {
            locations.map(function(elem,idx){
                return(
                    <div key={idx}
                    onClick={()=>{props.setVehiclePanel(true)
                        props.setPanelOpen(false)
                    }
                    
                        }
                    className='flex item-center border-2 p-3 border-gray--50 active:border-black rounded-xl justify-start gap-4 pt-2 my-2'>
                        <h2 className='bg-[#eee] h-8 flex item-center justify-center w-12 rounded-full'>
                            <i className='ri-map-pin-fill'></i></h2>
                        <h4 className='font-medium'>{elem}</h4>
                    </div>
                )
            })
        }

        
        

    </div>
  )
}

export default LocationSearchPanel