import { React, useState } from 'react'

const CheckOutButton = () =>  {
    const [White, setWhite] = useState(1)
    const Click1 = () => {
        setWhite(1)
    }
    const Click2 = () => {
        setWhite(2)
    }
    const Click3 = () => {
        setWhite(3)
    }
    
    return (    
        <div className='w-full flex justify-center items-center relative'>
            <div className='flex flex-row h-20 bg-black text-white w-full'>
                <button onClick={Click1} className={`${White === 1 && "bg-white text-black"} text-xl px-36`}>Customer Information</button>
                <button onClick={Click2} className={`${White === 2 && "bg-white text-black"} text-xl px-36`}>Payment Information</button>
                <button onClick={Click3} className={`${White === 3 && "bg-white text-black"} text-xl px-36`}>Booking is Confirmed</button>
            </div>
        </div>
    )   
} 


export default CheckOutButton