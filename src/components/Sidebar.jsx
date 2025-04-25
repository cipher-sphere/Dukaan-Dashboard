import React, { useState } from 'react';
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
import { HiMenuAlt2, HiX } from "react-icons/hi";

function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const menuItems = [
    { icon: <CiHome className="size-6" />, label: "Home" },
    { icon: <CiBoxList className="size-6" />, label: "Orders" },
    { icon: <CiShoppingTag className="size-6" />, label: "Products" },
    { icon: <CiDeliveryTruck className="size-6" />, label: "Delivery" },
    { icon: <CiBullhorn className="size-6" />, label: "Marketing" },
    { icon: <CiViewTimeline className="size-6" />, label: "Analytics" },
    { icon: <CiCreditCard1 className="size-6" />, label: "Payments" },
    { icon: <CiDiscount1 className="size-6" />, label: "Discounts" },
    { icon: <CiUser className="size-6" />, label: "Customers" },
    { icon: <CiDark className="size-6" />, label: "Theme" },
    { icon: <CiCircleMore className="size-6" />, label: "More" },
  ];

  return (
    <div className="relative h-full">
      {/* Mobile menu button */}
      <div className="md:hidden flex justify-between items-center p-4">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white p-2"
        >
          {isMobileMenuOpen ? 
            <HiX className="size-6" /> : 
            <HiMenuAlt2 className="size-6" />
          }
        </button>
        
        <div className="flex items-center gap-2">
          <IoIosContact className="size-8" />
          <div>
            <div className="text-lg font-semibold">Shivam</div>
            <div className="text-sm"><u>Visit store</u></div>
          </div>
        </div>
      </div>
      
      {/* Sidebar content - hidden on mobile unless toggled */}
      <div className={`bg-blue-950 text-white px-3 py-2 ${isMobileMenuOpen ? 'block' : 'hidden'} md:block h-full`}>
        {/* Desktop header - hidden on mobile */}
        <div className="hidden md:flex justify-between items-center gap-2 mb-4">
          <div><IoIosContact className="size-9" /></div>
          <div>
            <div className="text-xl font-semibold">Shivam</div>
            <div><u>Visit store</u></div>
          </div>
          <div><BiDownArrow className="size-7" /></div>
        </div>

        {/* Menu Items */}
        <div className="overflow-y-auto">
          {menuItems.map((item, index) => (
            <div 
              key={index} 
              className="flex gap-3 items-center my-2 py-3 font-semibold text-lg px-2 mx-2 cursor-pointer hover:bg-blue-800 rounded"
            >
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        {/* Credits */}
        <div className="flex items-center gap-3 bg-blue-900 p-1 px-3 rounded text-gray-300 cursor-pointer hover:text-white mt-4">
          <div className="bg-blue-800 p-0.5 rounded"><CiCreditCard1 className="size-8" /></div>
          <div>
            <div className="text-sm">Available Credits</div>
            <div className="text-lg">222.10</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;