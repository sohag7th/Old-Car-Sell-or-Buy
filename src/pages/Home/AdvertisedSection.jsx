import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import useStatus from '../../hooks/useStatus';
import BookingModal from '../../shared/BookingModal';
import Loading from '../../shared/Loading';
import ProductCad from '../../shared/ProductCad';

const AdvertisedSection = () => {
    const { user, loadingUser } = useContext(AuthContext);
    const [status, statusLoading] = useStatus(user);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [products, setProducts] = useState([]);
     const navigate = useNavigate();

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

    if (isLoading || loadingUser || statusLoading) {
        return <Loading></Loading>
    }
    if (error) {
        return <h1>Error...</h1>
    }

    const handleMore = product => {
        navigate(`/category/${product.categotyName}`)
    }
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-screen-xl justify-items-center mx-auto  my-20'>
                {
                    products.length > 0 &&
                    products.map(product => <ProductCad
                        key={product._id}
                        product={product}
                    >
                        {
                            // status === "Buyers" &&
                            <label
                                onClick={() => handleMore(product)}
                                className="btn btn-sm modal-button bg-gradient-to-r from-secondary to-primary border-0 text-white">
                                More
                            </label>
                        }
                    </ProductCad>)
                }
            </div>
            
        </div>
    );
};

export default AdvertisedSection;