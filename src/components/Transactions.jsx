import React from 'react'
import Table from './Table'

function Transactions() {
  return (
    <div>
      <div className='font-bold text-lg sm:text-xl my-5'>Transactions | This Month</div>
      <div className='flex flex-col sm:flex-row gap-3 mb-10'>
        <div className='border rounded-full px-4 py-1 bg-gray-200 text-gray-400 w-full sm:w-auto'>
          <button>Payouts (22)</button>
        </div>
        <div className='border rounded-full px-4 py-1 bg-blue-600 text-white w-full sm:w-auto'>
          <button>Refunds (6)</button>
        </div>
      </div>
      <Table />
    </div>
  )
}

export default Transactions
