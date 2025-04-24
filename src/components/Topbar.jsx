import React from 'react'
import { CiCircleQuestion } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaMessage } from "react-icons/fa6";

function Topbar() {
    return (
        <div className='flex justify-between border-b py-3 px-5 shadow-sm'>
            <div className='flex items-center gap-2'>
                <div className=' font-semibold text-lg'>Payouts</div>

                <div className='flex items-center gap-1 text-xs'><CiCircleQuestion />How it works</div>
            </div>
            <div className='flex items-center gap-3 border px-3 py-1 rounded bg-gray-100 w-96'><FiSearch /><input type="text" placeholder='Search features, turorials, etc.' className='w-80 bg-gray-100' /></div>
            <div className='flex gap-3'>
                <div className='border rounded-full bg-gray-200 text-gray-700 p-2'>
                    <FaMessage />
                </div>
                <div className='border rounded-full bg-gray-200 text-gray-700 p-2' >
                    <IoMdArrowDropdown />
                </div>
            </div>
        </div>
    )
}

export default Topbar