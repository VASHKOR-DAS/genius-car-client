import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {

    const { _id, title, price, img } = service;

    return (
        <div className="m-3 p-3 card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='object-cover' src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{title}</h2>
                <div className='text-secondary text-xl font-bold flex'>
                    <p className=''>Price: ${price}</p>
                    <Link to={`/checkout/${_id}`}><FaArrowRight></FaArrowRight></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;