import React from 'react'
import { FcHighPriority } from "react-icons/fc";
import { FcApproval } from "react-icons/fc";

import { orderData } from './data'
import Tabletop from './Tabletop'

function Table() {
    return (
        <div className='border rounded shadow'>
            <div className='p-4'><Tabletop /></div>
            <div className="space-y-2 px-4 sm:px-12">
                <div className="flex flex-col sm:flex-row justify-between font-semibold pt-6 pb-4 text-sm sm:text-base border-b">
                    <div className="w-full sm:w-1/5">ORDER ID</div>
                    <div className="w-full sm:w-1/5">STATUS</div>
                    <div className="w-full sm:w-1/5">TRANSACTION ID</div>
                    <div className="w-full sm:w-1/5">REFUND DATE</div>
                    <div className="w-full sm:w-1/5">ORDER AMOUNT</div>
                </div>
                {orderData.map((order) => (
                    <div className="flex flex-col sm:flex-row justify-between items-center border-b py-4 shadow-sm text-sm sm:text-base" key={order.transactionID}>
                        <div className="text-blue-600 font-semibold w-full sm:w-1/5">#{order.id}</div>
                        <div className="flex items-center gap-1 w-full sm:w-1/5">
                            {order.status === 'Successful' ? <FcApproval /> : <FcHighPriority />}
                            {order.transactionID}
                        </div>
                        <div className="w-full sm:w-1/5">{order.transactionID}</div>
                        <div className="w-full sm:w-1/5">{order.refundDate}</div>
                        <div className="w-full sm:w-1/5">{order.amount}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Table
