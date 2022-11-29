import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../../shared/Loading';
import ProductCad from '../../../shared/ProductCad';

const AllProducts = () => {
    const { data: products, isLoading, refetch } = useQuery('users', () => fetch(`https://old-car-server.vercel.app/category`).then(res => res.json()),);


    if (isLoading) {
        return <Loading></Loading>
    }

    const handleDelete = product => {
        fetch(`https://old-car-server.vercel.app/category/${product._id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                //   console.log(data);
                if (data?.modifiedCount > 0) {
                    toast.info(`Product Delete.`, { autoClose: 1000 })
                    
                }
                fetch(`https://old-car-server.vercel.app/brand/${product.categotyName}`, {
                        method: 'PATCH',
                        headers: {
                            'content-type': 'application/json',
                            //    'authorization': `Bearer ${localStorage.getItem('life-advice')}`
                        },
                        body: JSON.stringify({ action: "decrement" })
                    })
                        .then(res => res.json())
                        .then(data => {
                            refetch();

                            //   console.log(data);
                        })

                //   console.log(data);
            })

    }
    console.log(products)
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-screen-xl justify-items-center mx-auto  my-20'>
            {
                products.length > 0 &&
                products.map(product => <ProductCad
                    key={product._id}
                    product={product}
                >

                    <label
                        onClick={() => handleDelete(product)}
                        className="btn btn-sm modal-button bg-gradient-to-r from-secondary to-primary border-0 text-white">
                        Delete
                    </label>



                </ProductCad>)
            }
        </div>
    );
};

export default AllProducts;