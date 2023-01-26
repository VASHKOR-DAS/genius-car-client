import React from 'react';

const BannerItem = ({ slide }) => {
    const { image, id, pre, next } = slide;

    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">

            <div className='carousel-img'>
                <img alt="img" src={image} className="w-full" />
            </div>

            <div className="absolute transform -translate-y-1/2 left-[10%] top-1/4">
                <h1 className="xl:text-6xl lg:text-5xl md:text:3xl sm:text-3xl text-lg font-bold text-white">
                    Affordable <br />
                    Price For Car <br />
                    Servicing
                </h1>
            </div>

            <div className="absolute transform -translate-y-1/2 left-[10%] top-1/2">
                <p className='w-2/5 text-white xl:text-xl md:text-base text-sm'>
                    There are many variations of passages of available, but
                    the majority have suffered alteration in some form
                </p>
            </div>

            <div className="absolute transform -translate-y-1/2 left-[10%] top-3/4">
                <button className="btn btn-secondary mr-5 text-white normal-case">Discover More</button>
                <button className="btn btn-active btn-ghost text-white normal-case">Latest Project</button>
            </div>

            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${pre}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;