import React from 'react'
import { CiCircleQuestion } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaMessage } from "react-icons/fa6";

function Topbar() {
    return (
        <div className='flex flex-col gap-3 md:flex-row md:justify-between border-b py-3 px-5 shadow-sm'>
            <div className='flex items-center justify-between md:justify-start gap-2'>
                <div className='font-semibold text-lg'>Payouts</div>
                <div className='flex items-center gap-1 text-xs'>
                    <CiCircleQuestion />
                    <span className='hidden sm:inline'>How it works</span>
                </div>
            </div>
            <div className='flex items-center gap-2 border px-3 py-1 rounded bg-gray-100 w-full md:w-96'>
                <FiSearch className='text-gray-600' />
                <input
                    type="text"
                    placeholder='Search features, tutorials, etc.'
                    className='w-full bg-gray-100 outline-none text-sm'
                />
            </div>
            <div className='flex justify-end gap-3'>
                <div className='border rounded-full bg-gray-200 text-gray-700 p-2'>
                    <FaMessage />
                </div>
                <div className='border rounded-full bg-gray-200 text-gray-700 p-2'>
                    <IoMdArrowDropdown />
                </div>
            </div>
        </div>
    )
}

export default Topbar
