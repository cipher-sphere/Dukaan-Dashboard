import React from 'react'
import { CiCircleQuestion } from "react-icons/ci";

function BlueCard({
    amount,
    ordercount,
    date,
    time
}) {
    return (<>
        <div className='bg-blue-500 rounded-t text-white px-4 py-5'>
            <div className='flex items-center font-medium'>Next payout<CiCircleQuestion className='ml-3 size-5' /></div>
            <div className='flex justify-between items-center mt-4'>
                <div className='font-semibold text-3xl'>Rs.{amount}</div>
                <div className='font-medium text-lg'><u>{ordercount} orders {">"}</u></div>
            </div>
        </div>
        <div className='flex justify-between bg-blue-900 py-3 px-4 rounded-b'>
            <div className='font-medium text-white'>Next payout date:</div>
            <div className='font-medium text-white'>{date}, {time}</div>
        </div>
    </>
    )
}

export default BlueCard