import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div>
            <article className='text-center'>
                <p className='mb-5 text-2xl font-bold text-secondary'>Services</p>
                <h1 className="mb-10 font-bold text-5xl">Our Service Area</h1>
                <p className='mb-10'>the majority have suffered alteration in some form, by injected humour, or randomized <br />
                    words which don't look even slightly believable. </p>
            </article>

            <div className='flex flex-wrap'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;