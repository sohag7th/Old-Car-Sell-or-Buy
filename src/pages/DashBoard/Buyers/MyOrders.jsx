import React, { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../../Context/UserContext';
import Loading from '../../../shared/Loading';
import DataRow from '../Admin/DataRow';
import MyorderRow from './MyorderRow';
import PaymentModal from './PaymentModal';
import { FaTrash } from "react-icons/fa";
import OrderDeleteModal from './OrderDeleteModal';

const MyOrders = () => {
    const { user, loadingUser } = useContext(AuthContext);

    const [openModal, setOpenModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);


    const [deleteProduct, setDeleteProduct] = useState(false);


    const { data: myOrders, isLoading, refetch } = useQuery('myOrders', () => fetch(`https://old-car-server.vercel.app/order/${user.email}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }
    ).then(res => res.json()),);

    if (isLoading || loadingUser) {
        return <Loading></Loading>
    }

    const handlePayment = order => {
        setOpenModal(order);
    }

    return (
        <div className='ml-20'>
            {
                myOrders.length === 0 ?
                    <h2 className='text-center text-4xl pt-20 text-red-600'>No products order yet. </h2>
                    :
                    <h2 className='text-center text-4xl pt-2 text-green-600'>Your order history </h2>

            }
            <div className="overflow-x-auto mt-12">
                {
                    myOrders.length > 0 &&
                    <table className="table w-full">
                        <thead>
                            <tr className='font-semibold'>
                                <th>No.</th>
                                <th>Image</th>
                                <th>Product Name</th>
                                <th>Product Price</th>
                                <th>Seller Email</th>
                                <th>Payment</th>
                                <th>Status</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                myOrders?.map((order, index) => <MyorderRow
                                    key={order._id}
                                    order={order}
                                    refetch={refetch}
                                    index={index}
                                    setDeleteProduct={setDeleteProduct}
                                >
                                    {order.payment ?
                                        <>
                                            <th className='text-green-600'>Payment Complete</th>
                                            <th className='text-green-600'>Deleverd</th>
                                        </>
                                        :
                                        <>
                                            <th>
                                                <label
                                                    onClick={() => handlePayment(order)}
                                                    htmlFor="paymentModal"
                                                    className="  modal-button text-green-600">
                                                    Pay Now
                                                </label>
                                            </th>
                                            <th className='text-red-600  '>
                                                <label
                                                    onClick={() => setDeleteModal(order)}
                                                    htmlFor="orderDeleteModal"
                                                    className="  modal-button flex    items-center gap-3">
                                                    <span>Delete</span>
                                                    <FaTrash />
                                                </label>
                                            </th>
                                        </>
                                        // <th className='text-green-600'> <button onClick={()=>handlePayment(order)}>Pay Now</button> </th>
                                    }

                                </MyorderRow>)
                            }


                        </tbody>
                    </table>
                }

            </div>
            {/* Modal Show  */}
            {
                openModal
                &&
                <PaymentModal
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                    refetch={refetch}
                ></PaymentModal>
            }

            {/* delete modal  */}
            {
                deleteModal
                &&
                <OrderDeleteModal
                    deleteModal={deleteModal}
                    setDeleteModal={setDeleteModal}
                    refetch={refetch}
                    url={"order"}
                ></OrderDeleteModal>
            }
        </div>
    );
};

export default MyOrders;