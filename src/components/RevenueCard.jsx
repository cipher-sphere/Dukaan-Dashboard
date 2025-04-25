import React from 'react'
import { CiCircleQuestion } from 'react-icons/ci'

function RevenueCard({
  title,
  orderCount,
  amount
}) {
  return (
    <div className='rounded px-4 py-5 shadow text-sm sm:text-base'>
      <div className='flex items-center font-medium'>{title}<CiCircleQuestion className='ml-3 size-5' /></div>
      <div className='flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mt-4 gap-2 sm:gap-0'>
        <div className='font-semibold text-2xl sm:text-3xl'>Rs.{amount}</div>
        {orderCount > 0 && (
          <div className='font-medium text-sm sm:text-lg'>
            <u>{orderCount} orders {">"}</u>
          </div>
        )}
      </div>
    </div>
  )
}

export default RevenueCard
