import React from 'react';
import {
  CiHome,
  CiBoxList,
  CiShoppingTag,
  CiDeliveryTruck,
  CiBullhorn,
  CiViewTimeline,
  CiCreditCard1,
  CiDiscount1,
  CiUser,
  CiDark,
  CiCircleMore,
} from 'react-icons/ci';
import { BiDownArrow } from "react-icons/bi";
import { IoIosContact } from "react-icons/io";

function Sidebar() {
  return (
    <div className='bg-blue-950 text-white px-3 py-2'>
        <div className='flex justify-between items-center gap-2'>
            <div><IoIosContact className='size-9'/></div>
            <div>
                <div className='text-xl font-semibold'>Shivam</div>
                <div><u>Visit store</u></div>
            </div>
            <div><BiDownArrow className='size-7'/></div>
        </div>
        <div>
            <div className='flex gap-3 items-center my-3 py-3 font-semibold text-lg px-2 mx-2 cursor-pointer hover:bg-blue-800 rounded'><CiHome className='size-6' /> Home</div>
            <div className='flex gap-3 items-center my-3 py-3 font-semibold text-lg px-2 mx-2 cursor-pointer hover:bg-blue-800 rounded'><CiBoxList className='size-6' /> Orders</div>
            <div className='flex gap-3 items-center my-3 py-3 font-semibold text-lg px-2 mx-2 cursor-pointer hover:bg-blue-800 rounded'><CiShoppingTag className='size-6' /> Products</div>
            <div className='flex gap-3 items-center my-3 py-3 font-semibold text-lg px-2 mx-2 cursor-pointer hover:bg-blue-800 rounded'><CiDeliveryTruck className='size-6' /> Delivery</div>
            <div className='flex gap-3 items-center my-3 py-3 font-semibold text-lg px-2 mx-2 cursor-pointer hover:bg-blue-800 rounded'><CiBullhorn className='size-6' /> Marketing</div>
            <div className='flex gap-3 items-center my-3 py-3 font-semibold text-lg px-2 mx-2 cursor-pointer hover:bg-blue-800 rounded'><CiViewTimeline className='size-6' /> Analytics</div>
            <div className='flex gap-3 items-center my-3 py-3 font-semibold text-lg px-2 mx-2 cursor-pointer hover:bg-blue-800 rounded'><CiCreditCard1 className='size-6' /> Payments</div>
            <div className='flex gap-3 items-center my-3 py-3 font-semibold text-lg px-2 mx-2 cursor-pointer hover:bg-blue-800 rounded'><CiDiscount1 className='size-6' /> Discounts</div>
            <div className='flex gap-3 items-center my-3 py-3 font-semibold text-lg px-2 mx-2 cursor-pointer hover:bg-blue-800 rounded'><CiUser className='size-6' /> Customers</div>
            <div className='flex gap-3 items-center my-3 py-3 font-semibold text-lg px-2 mx-2 cursor-pointer hover:bg-blue-800 rounded'><CiDark className='size-6' /> Theme</div>
            <div className='flex gap-3 items-center my-3 py-3 font-semibold text-lg px-2 mx-2 cursor-pointer hover:bg-blue-800 rounded'><CiCircleMore className='size-6' /> More</div>
        </div>
        <div className='flex items-center gap-3 bg-blue-900 p-1 px-3 rounded text-gray-300 cursor-pointer hover:text-white'>
            <div className='bg-blue-800 p-0.5 rounded'><CiCreditCard1 className='size-8'/></div>
            <div>
                <div className='text-sm'>Available Credits</div>
                <div className='text-lg'>222.10</div>
            </div>
        </div>
    </div>
  );
}

export default Sidebar;
