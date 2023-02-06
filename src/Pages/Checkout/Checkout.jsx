import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Checkout = () => {
    const {_id, title, price } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;

        // order er ki ki  info db te pathabo tar 1ta object toiri korlam, jegulo useLoaderData() theke anlm segulo holo value, object name nije toiri kora
        const order = {
            service: _id,
            serviceName: title,
            price, // property name & value same thakle 1ta likhlei hoy
            customer: name, // name field ta
            email,
            phone,
            message
        }

    }


    return (
        <div className='bg-gray-100 p-20'>
            <form onSubmit={handlePlaceOrder}>
                <h2 className="text-2xl text-success">You are about to order: {title}</h2>
                <h4 className="text-2xl text-gray-500">Price: {price}</h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4'>
                    <input name="firstName" type="text" placeholder="First Name" className="input w-full input-bordered" />
                    <input name="lastName" type="text" placeholder="Last Name" className="input w-full input-bordered" />
                    <input name="phone" type="text" placeholder="Your Phone" className="input w-full input-bordered" required />
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input w-full input-bordered" readOnly />
                </div>
                <textarea name="message" className="textarea textarea-bordered h-56 mt-4 w-full" placeholder="Your Message" required></textarea>
                <input className='btn btn-secondary normal-case mt-6 w-full' type="submit" value="Place Your Order" />
            </form>
        </div>
    );
};

export default Checkout;