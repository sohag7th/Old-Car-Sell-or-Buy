import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from '../../shared/Loading';
import ProductCad from '../../shared/ProductCad';

const AdvertisedSection = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetching = () => {
            setIsLoading(true);
            axios.get('http://localhost:5000/advertised')
                .then(res => {
                    setProducts(res.data);
                    setIsLoading(false);
                })
                .catch(err => {
                    setError(err);
                    setIsLoading(false);
                })
        }
        fetching();
    }, [])

    if (isLoading) {
        return <Loading></Loading>
    }
    if (error) {
        return <h1>Error...</h1>
    }
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-screen-xl justify-items-center mx-auto  my-20'>
                {
                    products.length > 0 &&
                    products.map(product => <ProductCad
                        key={product._id}
                        product={product}
                    ></ProductCad>)
                }
            </div>
        </div>
    );
};

export default AdvertisedSection;