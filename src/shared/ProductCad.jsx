import React from 'react';
import { FaCheck } from "react-icons/fa";

const ProductCad = ({ product, setOpenModal, children }) => {
    const { carName, location, resalePrice, showroomlPrice, yearsOfUse, sellerName, sellerEmail, date, verified, image } = product;
    // console.log(service);
    return (
        <div className="max-w-sm  ">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" className='h-52 w-10/12' /></figure>
                <div className="card-body pb-5">
                    <h2 className="card-title"> {carName} </h2>

                    <div className='flex flex-col text-base'>
                        <p className='text-lg font-semibold text-green-600'>Sell Price: ${resalePrice} </p>
                        <p className='text-lg font-semibold text-red-400'><del>Showroom Price: ${showroomlPrice}</del></p>
                        <p>Years Of Use: {yearsOfUse}</p>
                        <p>Location: {location}</p>
                        <p>Post Date: {date}</p>
                        <p>Location: {location}</p>
                        <div className='flex'>
                            <h2>
                                Seller: {sellerName}
                                {verified && <div className="badge badge-accent ml-2"><FaCheck /></div>}
                            </h2>
                        </div>
                        <p>Seller Email: {sellerEmail}</p>
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