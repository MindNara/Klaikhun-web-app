import { React, useContext } from 'react'
import { statusContext } from './status'
const CheckOutButton = () =>  {
    const [status] = useContext(statusContext)
    
    return (
        <div className='w-full flex justify-center items-center relative'>
            <div className='flex flex-row h-20 bg-black text-white w-full'>
                <div className={`${status === 0 && "bg-white text-black"} text-center text-xl pt-6 w-1/3`}>Customer Information</div>
                <div className={`${status === 1 && "bg-white text-black"} text-center text-xl pt-6 w-1/3`}>Payment Information</div>
                <div className={`text-center text-xl pt-6 w-1/3`}>Booking is Confirmed</div>
            </div>
        </div>
    )   
} 


export default CheckOutButton