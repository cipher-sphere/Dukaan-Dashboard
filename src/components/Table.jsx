import React from 'react'
import { FcHighPriority } from "react-icons/fc";
import { FcApproval } from "react-icons/fc";

import { orderData } from './data'
import Tabletop from './Tabletop'
function Table() {
    return (
        <div className='border rounded shadow'>
            <div className='p-4'><Tabletop /></div>
            <div className="space-y-2 px-12">
                <div className="flex justify-between font-semibold pt-6 pb-4">
                    <div className="">ORDER ID</div>
                    <div className="">STATUS</div>
                    <div className="">TRANSACTION ID</div>
                    <div className="">REFUND DATE</div>
                    <div className="">ORDER AMOUNT</div>
                </div>
                {orderData.map((order) => (
                    <div className="flex justify-between items-center border-b py-4 shadow-sm" key={order.transactionID}>
                        <div className="text-blue-600 font-semibold">#{order.id}</div>
                        <div className=" flex items-center gap-1">
                            {order.status === 'Successful' ? <FcApproval /> : <FcHighPriority />}
                            {order.transactionID}
                        </div>
                        <div className="">{order.transactionID}</div>
                        <div className="">{order.refundDate}</div>
                        <div className="">{order.amount}</div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Table