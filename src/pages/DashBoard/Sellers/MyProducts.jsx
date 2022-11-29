import React, { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../../Context/UserContext';
import Loading from '../../../shared/Loading';
import ProductCad from '../../../shared/ProductCad';

const MyProducts = () => {
    const [openModal, setOpenModal] = useState(false);

    const { user, loadingUser } = useContext(AuthContext);
    const { data: products, isLoading, refetch } = useQuery('productsOwners', () => fetch(`http://localhost:5000/category/seller/${user.email}`).then(res => res.json()),);

    if (isLoading) {
        return <Loading></Loading>
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
                        <label
                            onClick={() => setOpenModal(product)}
                            htmlFor="modalBooking"
                            className="btn btn-sm modal-button bg-gradient-to-r from-secondary to-primary border-0 text-white">
                            Delete
                        </label>
                    </ProductCad>)
                }
            </div>

            {/* Modal Show  */}
            {/* {
                openModal
                &&
                <BookingModal
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                    refetch={refetch}
                ></BookingModal>
            } */}
        </div>
    );
};


export default MyProducts;