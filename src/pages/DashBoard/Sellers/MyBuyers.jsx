import React, { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../../Context/UserContext';
import Loading from '../../../shared/Loading';
import MyBuyerRow from './MyBuyerRow';

const MyBuyers = () => {
    const { user, loadingUser } = useContext(AuthContext);


    const [deleteProduct, setDeleteProduct] = useState(false);


    const { data: buyers, isLoading, refetch } = useQuery('buyers', () => fetch(`http://localhost:5000/buyers/${user.email}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }
    ).then(res => res.json()),);

    if (isLoading || loadingUser) {
        return <Loading></Loading>
    }
    console.log(buyers);
    return (
        <div className='ml-20'>
            {
                buyers.length === 0 ?
                    <h2 className='text-center text-4xl pt-20 text-red-600'>No products sell yet. </h2>
                    :
                    <h2 className='text-center text-4xl pt-2 text-green-600'>Your all Buyers </h2>

            }
            <div className="overflow-x-auto">
                {
                    buyers.length > 0 &&
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Location</th>
                                <th>Phone</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                buyers?.map((buyer, index) => <MyBuyerRow
                                    key={buyer._id}
                                    buyer={buyer}
                                    refetch={refetch}
                                    index={index}
                                    setDeleteProduct={setDeleteProduct}
                                ></MyBuyerRow>)
                            }


                        </tbody>
                    </table>
                }

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

export default MyBuyers;