import React from 'react'
import { FiSearch } from "react-icons/fi";
import { FaSort } from "react-icons/fa";
import { IoDownloadOutline } from "react-icons/io5";

function Tabletop() {
  return (
    <div className='flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center'>
      <div className='flex items-center gap-2 border px-3 py-1 rounded w-full sm:w-80 text-sm sm:text-base'>
        <FiSearch className='text-gray-500' />
        <input
          type="text"
          placeholder='Order ID or transaction ID'
          className='w-full outline-none'
        />
      </div>
      <div className='flex gap-3 sm:gap-4 items-center justify-end'>
        <div className='flex items-center gap-2 border rounded px-3 py-1.5 text-sm sm:text-base'>
          Sort <FaSort className='size-4 text-gray-600' />
        </div>
        <div className='border rounded px-3 py-1.5'>
          <IoDownloadOutline className='size-5 sm:size-6 text-gray-600' />
        </div>
      </div>
    </div>
  )
}

export default Tabletop
