import React from 'react'
import BlueCard from './BlueCard'
import RevenueCard from './RevenueCard'
import { FaChevronDown } from "react-icons/fa";

function Overview() {
    return (
        <div>
            <div className='flex justify-between items-center mb-6'>
                <div className='font-semibold text-xl'>Overview</div>
                <div><button className="flex gap-2 items-center border border-gray-300 px-4 py-2 rounded-md bg-white text-gray-700 font-medium hover:bg-gray-100 transition">
                    This Month <FaChevronDown className='text-gray-700'/>
                </button></div>
            </div>
            <div className='flex justify-between space-x-4'>
                <div className='w-full'>        <BlueCard amount={2313.23} ordercount={23} date={"Today"} time={"04:00 PM"} />
                </div>
                <div className='w-full'>        <RevenueCard title="Amount Pending" orderCount={13} amount={92312.21} /><br />
                </div>
                <div className='w-full'>        <RevenueCard title="Amount Processed" orderCount={0} amount={2392312.19} /><br />
                </div>
            </div>
        </div>
    )
}

export default Overview