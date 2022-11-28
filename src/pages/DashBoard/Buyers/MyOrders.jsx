import React, { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../../Context/UserContext';
import Loading from '../../../shared/Loading';
import DataRow from '../Admin/DataRow';
import MyorderRow from './MyorderRow';

const MyOrders = () => {
    const { user, loadingUser } = useContext(AuthContext);

   
    const [deleteProduct, setDeleteProduct] = useState(false);


    const { data: myOrders, isLoading , refetch } = useQuery('myOrders', () => fetch(`http://localhost:5000/order/${user.email}`,{
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }
    ).then(res => res.json()), );

    if (isLoading || loadingUser) {
        return <Loading></Loading>
    }
    return (
        <div className='ml-20'>
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Seller Email</th>

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
                        ></MyorderRow>)
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

export default MyOrders;