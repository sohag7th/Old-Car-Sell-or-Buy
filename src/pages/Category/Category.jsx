import React, { useState } from 'react';
import { useQuery } from 'react-query';
import {  useParams } from 'react-router-dom';
import BookingModal from '../../shared/BookingModal';
import Loading from '../../shared/Loading';
import ProductCad from '../../shared/ProductCad';

const Category = () => {
    const [openModal, setOpenModal] = useState(false);
    const name = useParams();
    const { data: products, isLoading , refetch } = useQuery('users', () => fetch(`http://localhost:5000/category/${name.name}`).then(res => res.json()), );

    if (isLoading) {
        return <Loading></Loading>
    }


    console.log(name);
    console.log(products);
    return (
        <div className=''>
            <h2 className='text-center text-4xl pt-2'>Which one you want? </h2>
            {/* all services show */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-screen-xl justify-items-center mx-auto  my-20'>
                {
                    products.length > 0 &&
                    products.map(product => <ProductCad
                        key={product._id}
                        product={product}
                        setOpenModal={setOpenModal}
                    ></ProductCad>)
                }
            </div>

            {/* Modal Show  */}
            {
                openModal
                &&
                <BookingModal
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                    refetch={refetch}
                ></BookingModal>
            }
        </div>
    );
};

export default Category;