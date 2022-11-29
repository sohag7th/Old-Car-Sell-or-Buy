import React, { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/UserContext';
import useStatus from '../../hooks/useStatus';
import BookingModal from '../../shared/BookingModal';
import Loading from '../../shared/Loading';
import ProductCad from '../../shared/ProductCad';

const Category = () => {
    const { user, loadingUser } = useContext(AuthContext);
    const [status, statusLoading] = useStatus(user);
    const [openModal, setOpenModal] = useState(false);
    const name = useParams();
    const { data: products, isLoading, refetch } = useQuery('products', () => fetch(`https://old-car-server.vercel.app/category/${name.name}`).then(res => res.json()),);


    if (loadingUser || statusLoading || isLoading) {
        return <Loading></Loading>
    }


    const handleReport = (id) => {
        fetch(`https://old-car-server.vercel.app/category/${id}`, 
        {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ reported: 'Yes' })
        })
            .then(res => res.json())
            .then(data => {
             //   console.log(data);
                if (data?.modifiedCount > 0) {
                    toast.info(`Report Sucessfully.`, { autoClose: 1000 })
                }
                refetch();
             //   console.log(data);
            })

    }
    // console.log(products);
    return (
        <div className=''>
            <h2 className='text-center text-4xl py-2 font-semibold text-green-600 '>
                <span className='border-b-4 border-r-gray-500 pb-2'>Which one you want?</span>
            </h2>
            {/* all services show */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-screen-xl justify-items-center mx-auto  my-20'>
                {
                    products.length > 0 &&
                    products.map(product => <ProductCad
                        key={product._id}
                        product={product}
                        setOpenModal={setOpenModal}
                    >
                        {
                            status === "Buyers" &&
                            <div className='flex justify-between'>
                                <button
                                    onClick={() => handleReport(product._id)}
                                    className="btn btn-sm modal-button bg-red-600 border-0 ">
                                    Report Product
                                </button>

                                <label
                                    onClick={() => setOpenModal(product)}
                                    htmlFor="modalBooking"
                                    className="btn btn-sm modal-button bg-gradient-to-r from-secondary to-primary border-0 text-white">
                                    Book Now
                                </label>
                            </div>
                        }
                    </ProductCad>)
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