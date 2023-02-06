import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {

    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])


    return (
        <div>
            <h2 className='text-xl py-3 my-4'>
                <span className='py-3 px-3 bg-secondary italic rounded-md text-white'>
                    Total order: {orders?.length}
                </span>
            </h2>


            {/* Table to display data */}

            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Delete</th>
                            <th className='text-center'>Name</th>
                            <th>Service Name</th>
                            <th>Favorite Color</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    {
                        orders.map(order => <OrderRow
                            key={order?._id}
                            order={order}
                        ></OrderRow>)
                    }
                    <tbody>

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Orders;