import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { useQuery } from 'react-query';
import Loading from '../../../shared/Loading';
import OrderDeleteModal from '../Buyers/OrderDeleteModal';
import DataRow from './DataRow';

const AllSellers = () => {

    const [deleteModal, setDeleteModal] = useState(false);

    const { data: sellers, isLoading, refetch } = useQuery('sellers', () => fetch(`https://old-car-server.vercel.app/sellers`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }
    ).then(res => res.json()),);
    if (isLoading) {
        return <Loading></Loading>
    }

    const handleVerify = seller => {
     //   console.log(seller);
        fetch(`https://old-car-server.vercel.app/user/info/${seller.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({verified: "Yes"})
        })
            .then(res => res.json())
            .then(data => {
                refetch();

             //   console.log('Data iinside useToken', data);
            })

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
                            <th>Status</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers?.map((seller, index) => <DataRow
                                key={seller._id}
                                user={seller}
                                refetch={refetch}
                                index={index}
                            >
                                {
                                    seller.verified ?
                                        <th className='text-green-600  '>Verified</th>
                                        :
                                        <th onClick={() => handleVerify(seller)} className='text-sky-500  '>Make Verified</th>
                                }

                                <th className='text-red-600  '>
                                    <label
                                        onClick={() => setDeleteModal(seller)}
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

export default AllSellers;