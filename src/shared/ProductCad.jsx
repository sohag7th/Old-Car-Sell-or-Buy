import React from 'react';
import { FaCheck } from "react-icons/fa";

const ProductCad = ({ product, setOpenModal, children }) => {
    const { carName, location, resalePrice, showroomlPrice, yearsOfUse, sellerName, sellerEmail, date, verified, image, condition, description, payment } = product;
    // console.log(payment);
    return (
        <div className="max-w-sm  ">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" className='h-52 w-10/12' /></figure>
                <div className="card-body pb-5">
                    <h2 className="card-title"> {carName} </h2>

                    <div className='flex flex-col text-sm'>
                        <p className='text-lg font-semibold text-green-600'>Sell Price: ${resalePrice} </p>
                        <p className='text-lg font-semibold text-red-400'><del>Showroom Price: ${showroomlPrice}</del></p>
                        <p>{description?.slice(0, 100)}</p>
                        <p><span className='font-semibold'>Years Of Use:</span> {yearsOfUse}</p>
                        <div className='grid grid-cols-2 gap-5'>
                            <p><span className='font-semibold'>Location:</span> {location}</p>
                            <p><span className='font-semibold'>Condition:</span> {condition}</p>
                        </div>

                        <div className='grid grid-cols-2 gap-5'>

                            <p><span className='font-semibold'>Date:</span> {date}</p>
                            <p><span className='font-semibold'>Location:</span> {location}</p>
                        </div>
                        <div className='flex'>
                            <h2>
                            <span className='font-semibold'>Seller:</span> {sellerName}
                                {verified && <div className="badge badge-accent ml-2"><FaCheck /></div>}
                            </h2>
                        </div>
                        <p><span className='font-semibold'>Seller Email:</span> {sellerEmail}</p>
                    </div>
                    {
                        children
                    }

                    {/* <button className="btn btn-sm">Book Now</button> */}
                </div>
            </div>
        </div>
    );
};


export default ProductCad;