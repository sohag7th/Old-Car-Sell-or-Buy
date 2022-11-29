import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { useQuery } from 'react-query';
import Loading from '../../../shared/Loading';
import OrderDeleteModal from '../Buyers/OrderDeleteModal';
import DataRow from './DataRow';

const AllBuyers = () => {
    const [deleteProduct, setDeleteProduct] = useState(false);

    const [deleteModal, setDeleteModal] = useState(false);

    const { data: buyers, isLoading, refetch } = useQuery('sellers', () => fetch(`https://old-car-server.vercel.app/buyers`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }
    ).then(res => res.json()),);
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='ml-20'>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers?.map((buyer, index) => <DataRow
                                key={buyer._id}
                                user={buyer}
                                refetch={refetch}
                                index={index}
                            >
                                <th className='text-red-600  '>
                                    <label
                                        onClick={() => setDeleteModal(buyer)}
                                        htmlFor="orderDeleteModal"
                                        className="  modal-button flex    items-center gap-3">
                                        <span>Delete</span>
                                        <FaTrash />
                                    </label>
                                </th>
                            </DataRow>)
                        }


                    </tbody>
                </table>
                {/* delete modal  */}
                {
                    deleteModal
                    &&
                    <OrderDeleteModal
                        deleteModal={deleteModal}
                        setDeleteModal={setDeleteModal}
                        refetch={refetch}
                        url={"user"}
                    ></OrderDeleteModal>
                }
            </div>
        </div>
    );
};


export default AllBuyers;