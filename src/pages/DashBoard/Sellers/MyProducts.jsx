import React, { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../../Context/UserContext';
import ConfirmationModal from '../../../shared/ConfirmationModal';
import Loading from '../../../shared/Loading';
import ProductCad from '../../../shared/ProductCad';

const MyProducts = () => {
    const [openModal, setOpenModal] = useState(false);
    const [action, setAction] = useState(false);

    const { user, loadingUser } = useContext(AuthContext);
    const { data: products, isLoading, refetch } = useQuery('productsOwners', () => fetch(`https://old-car-server.vercel.app/category/seller/${user.email}`).then(res => res.json()),);

    if (isLoading || loadingUser) {
        return <Loading></Loading>
    }

    const handleModal = (product, modalAction) => {
        setOpenModal(product);
        setAction(modalAction);
    }


    // console.log(name);
    // console.log(products);
    return (
        <div className=''>
            {
                products.length === 0 ?
                    <h2 className='text-center text-4xl pt-20 text-red-600'>You do not added any car yet. Please add your old car. </h2>
                    :
                    <h2 className='text-center text-4xl pt-2 text-green-600'>Your All Products </h2>

            }

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
                            product.payment === "done" ?
                                <p className='text-green-600 text-lg font-semibold'>Status: Already Sold  </p>
                                :
                                <div>
                                    <p className='text-green-600 font-semibold'>Status: Available </p>

                                    <div className='grid grid-cols-2 gap-5 mt-4'>
                                        {
                                            product.advertised ?
                                                <label
                                                    className="btn btn-sm modal-button  bg-green-600 border-0 text-white">
                                                    Advertised
                                                </label>
                                                :
                                                <label
                                                    onClick={() => handleModal(product, "Advertise")}
                                                    htmlFor="confirmationModal"
                                                    className="btn btn-sm modal-button  bg-gradient-to-r from-secondary to-primary border-0 text-white">
                                                    Advertise
                                                </label>

                                        }

                                        <label
                                            onClick={() => handleModal(product, "Delete")}
                                            htmlFor="confirmationModal"
                                            className="btn btn-sm modal-button bg-red-600 border-0 text-white">
                                            Delete
                                        </label>
                                    </div>
                                </div>
                        }

                    </ProductCad>)
                }
            </div>

            {/* Modal Show  */}
            {
                openModal
                &&
                <ConfirmationModal
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                    refetch={refetch}
                    action={action}
                ></ConfirmationModal>
            }
        </div>
    );
};


export default MyProducts;