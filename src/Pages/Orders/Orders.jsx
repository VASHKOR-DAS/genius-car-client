import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {

    const { user, logOut } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            }
        })
            .then(res => {
                // unauthorized hoy hbe take take logOut kore dibo
                if (res.status === 401 || res.status === 403) {
                    logOut();
                }

                return res.json()
            })
            .then(data => {
                // console.log('received', data);
                setOrders(data)
            })
    }, [user?.email, logOut])


    const handleDelete = id => {
        const proceed = window.confirm('Cancel this order?');

        if (proceed) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Deleted order');
                        // baki jegulo ase oigulo show korabo
                        const remaining = orders.filter(odr => odr._id !== id);
                        setOrders(remaining);
                    }
                })
        }
    }


    // status update
    const handleStatusUpdate = id => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = orders.filter(odr => odr._id !== id);
                    const approving = orders.find(odr => odr._id === id);
                    approving.status = 'Approved'

                    const newOrders = [approving, ...remaining];
                    setOrders(newOrders);
                }
            })
    }


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
                            <th>Status</th>
                        </tr>
                    </thead>
                    {
                        orders.map(order => <OrderRow
                            key={order?._id}
                            order={order}
                            handleDelete={handleDelete}
                            handleStatusUpdate={handleStatusUpdate}
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