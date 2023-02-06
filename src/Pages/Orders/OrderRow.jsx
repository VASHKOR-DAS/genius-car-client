import React, { useEffect, useState } from 'react';

const OrderRow = ({ order }) => {

    // service holo service er id
    const { service, serviceName, phone, customer, price, message } = order;

    const [orderService, setOrderService] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setOrderService(data));
    }, [service])


    return (
        <tr>
            <th>
                <label>
                    <button className='btn btn-ghost'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-20">
                            {
                                orderService?.img &&
                                <img src={orderService.img} alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{phone}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">{price}</span>
            </td>
            <td>Indigo</td>
            <th>
                <button className="btn btn-ghost btn-xs">{message}</button>
            </th>
        </tr>
    );
};

export default OrderRow;