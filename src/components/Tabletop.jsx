import React from 'react'
import { FiSearch } from "react-icons/fi";
import { FaSort } from "react-icons/fa";
import { IoDownloadOutline } from "react-icons/io5";

function Tabletop() {
  return (
    <div className='flex justify-between'>
        <div className='flex items-center gap-3 border px-3 w-80 py-1 rounded'><FiSearch className='text-gray-500'/><input type="text" placeholder='Order ID or transaction ID' /></div>
        <div className='flex gap-4 items-center'>
            <div className='flex items-center gap-2 border rounded px-3 py-1.5'>Sort <FaSort className='size-4 text-gray-600'/> </div>
            <div className='border rounded px-3 py-1.5'><IoDownloadOutline className='size-6 text-gray-600' />
            </div>
        </div>
    </div>
  )
}

export default Tabletop