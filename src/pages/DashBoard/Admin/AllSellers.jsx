import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../shared/Loading';
import DataRow from './DataRow';

const AllSellers = () => {
    const [deleteProduct, setDeleteProduct] = useState(false);

    const { data: sellers, isLoading , refetch } = useQuery('sellers', () => fetch(`http://localhost:5000/sellers`,{
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }
    ).then(res => res.json()), );
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
                        <th>Status</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        sellers?.map((seller, index) => <DataRow
                            key={seller._id}
                            seller={seller}
                            refetch={refetch}
                            index={index}
                            setDeleteProduct={setDeleteProduct}
                        ></DataRow>)
                    }


                </tbody>
            </table>

            {/* {
                deleteProduct && <DeleteConfirmationModal
                    deleteProduct={deleteProduct}
                    setDeleteProduct={setDeleteProduct}
                    url={url}
                    refetch={refetch}
                >
                </DeleteConfirmationModal>
            } */}
        </div>
    </div>
    );
};

export default AllSellers;