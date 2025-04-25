import React, { useState, useEffect } from 'react';
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
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth < 1024) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check initial size
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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

  // Toggle Sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const Toggler = () => (
    <button 
      className="lg:hidden fixed top-24 left-4 z-50 bg-blue-900 text-white p-2 rounded-md"
      onClick={toggleSidebar}
    >
      {isOpen ? <HiX className="size-6" /> : <HiMenuAlt2 className="size-6" />}
    </button>
  );

  return (
    <>
      <Toggler />
      
      <div className={`bg-blue-950 text-white transition-all duration-300 h-full
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} 
        ${isMobile ? 'fixed z-40 w-64 shadow-lg' : 'w-full'}`}
      >
        <div className="px-3 py-2 h-full flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center gap-2 mb-6 mt-2">
            <div><IoIosContact className="size-9" /></div>
            <div className="flex-1">
              <div className="text-xl font-semibold">Shivam</div>
              <div><u>Visit store</u></div>
            </div>
            <div><BiDownArrow className="size-7" /></div>
          </div>

          {/* Menu Items */}
          <div className="flex-1 overflow-y-auto">
            {menuItems.map((item, index) => (
              <div 
                key={index} 
                className="flex gap-3 items-center my-2 py-3 font-semibold text-lg px-2 mx-2 cursor-pointer hover:bg-blue-800 rounded"
              >
                {item.icon}
                <span className={`${!isOpen && !isMobile ? 'hidden' : 'block'}`}>{item.label}</span>
              </div>
            ))}
          </div>

          {/* Credits */}
          <div className="flex items-center gap-3 bg-blue-900 p-1 px-3 rounded text-gray-300 cursor-pointer hover:text-white mt-auto mb-3">
            <div className="bg-blue-800 p-0.5 rounded"><CiCreditCard1 className="size-8" /></div>
            <div>
              <div className="text-sm">Available Credits</div>
              <div className="text-lg">222.10</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;