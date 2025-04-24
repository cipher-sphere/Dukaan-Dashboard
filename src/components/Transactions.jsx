import React from 'react'
import Table from './Table'
function Transactions() {
  return (
    <div>
      <div className='font-bold text-xl my-5'>Transactions | This Month</div>
      <div className='flex gap-3 mb-10'>
        <div className='border rounded-full px-4 py-1 bg-gray-200 text-gray-400'>
          <button>Payouts (22)</button>
        </div>
        <div className='border rounded-full px-4 py-1 bg-blue-600 text-white'>
          <button>Refunds (6)</button>
        </div>
      </div>
      <Table></Table>
    </div>
  )
}

export default Transactions