import React from "react";

const PaymentCard = ({imgSrc}) => {
    return (
        <div className="flex items-centerbg-white rounded-lg aspect-[4/3] h-[200px] checked:bg-black">
            <img src={imgSrc} className='w-full object-contain'></img>
        </div>
    )
}

export default PaymentCard