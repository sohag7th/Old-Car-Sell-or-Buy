import React from 'react';
import { Link } from 'react-router-dom';

const BrandCard = ({ brand }) => {
    const { title, image, quantity, categotyName } = brand;
    // console.log(brand);
    return (

        <Link to={`/category/${categotyName}`} className={`${ quantity < 1 ? "pointer-events-none" : " "}`} >
            <div className="card card-compact w-60 indicator bg-base-100 shadow-xl" >
                <figure><img src={image} alt="Shoes" className='mt-3' /></figure>
                <div className=" py-4">
                    <span className="indicator-item badge ">{quantity}</span>
                    <h2 className="text-2xl text-center">{title}</h2>
                </div>
            </div>
        </Link>

    );
};

export default BrandCard;