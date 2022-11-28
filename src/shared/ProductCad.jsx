import React from 'react';
import {   FaCheck } from "react-icons/fa"; 

const ProductCad = ({ product, setOpenModal }) => {
    const {  carName, location, resalePrice, originalPrice, yearsOfUse, sellerName, sellerEmail, date, verified, image } = product;
    // console.log(service);
    return (
        <div className="max-w-sm  ">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title"> {carName} </h2>
                    {/* <div className="badge badge-secondary">NEW</div> */}
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">Selling Price: {resalePrice}</div>
                        <div className="badge badge-outline">Original Price: {originalPrice}</div>
                    </div>
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
                    <label
                            onClick={() => setOpenModal(product)}
                            htmlFor="modalBooking"
                            className="btn btn-sm modal-button bg-gradient-to-r from-secondary to-primary border-0 text-white">
                            Book Now
                        </label>
                    {/* <button className="btn btn-sm">Book Now</button> */}
                </div>
            </div>
        </div>
    );
};


export default ProductCad;