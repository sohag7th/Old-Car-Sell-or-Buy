import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Context/UserContext';
import imageUpload from '../../../js/imageUpload';
import Loading from '../../../shared/Loading';

const AddAProduct = () => {
    const { user, loadingUser } = useContext(AuthContext);
    const { data: brands, isLoading } = useQuery('brandinfo', () => fetch(`http://localhost:5000/brand`).then(res => res.json()));

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [loadingImg, setLodingImg] = useState(false);

    if (loadingUser || loadingImg || isLoading) {
        return <Loading></Loading>
    }


    const onSubmit = data => {
        const { categotyName, carName, location, resalePrice, showroomlPrice, yearsOfUse } = data;

        const date = new Date().toDateString();
        const sortTime = new Date().getTime();

        const image = data.image[0];
        // Loading Start 
        setLodingImg(true)
        imageUpload(image)
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url
                    const productInfo = {
                        categotyName,
                        carName,
                        location,
                        resalePrice,
                        showroomlPrice,
                        yearsOfUse,
                        date,
                        sortTime,
                        image: img,
                        sellerName: user.displayName,
                        sellerEmail: user.email,
                        advertised: "",
                        booked: "",
                        verified: ""
                    };
                    fetch('http://localhost:5000/category/add', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json',
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(productInfo)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            // Loading End
                            setLodingImg(false)
                            if (inserted.insertedId) {
                                toast.success("Product added successfully");

                                fetch(`http://localhost:5000/brand/${categotyName}`, {
                                    method: 'PATCH',
                                    headers: {
                                        'content-type': 'application/json',
                                        //    'authorization': `Bearer ${localStorage.getItem('life-advice')}`
                                    },
                                    body: JSON.stringify({action: "increment"})
                                })
                                    .then(res => res.json())
                                    .then(data => {
                                        
                                        console.log(data);
                                    })

                                // reset();
                            }
                            else {
                                toast.error("Failed to add the Product");
                            }
                            console.log('Product', inserted);
                        })
                        .catch(e => {
                            // Loading End
                            setLodingImg(false);
                            console.log(e);
                        })
                }
                console.log('imgbb: ', result);
            })
            .catch(e => {
                // Loading End
                setLodingImg(false);
                console.log(e);
            });
        console.log("Data:", data);
    };
    return (
        <div className='mb-12 lg:mb-20 mx-8'>
            <h1 className='text-xl lg:text-2xl text-center mb-4'>Add Your Product</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="form-control max-w-lg mx-auto shadow-2xl p-3 lg:p-6">
                <label className="label">
                    <span className="label-text">Product Name</span>
                </label>
                <input
                    type="text"
                    className="input input-bordered  "
                    placeholder='Product Name'
                    {...register("carName",
                        {
                            required: "Product Name is required",
                        }
                    )}
                />
                {errors.tool_name?.type === 'required' && <p role="alert">{errors.tool_name?.message}</p>}

                <label className="label">
                    <span className="label-text">Location</span>
                </label>
                <input
                    type="text"
                    className="input input-bordered  "
                    placeholder='Location'
                    {...register("location",
                        {
                            required: "Location Name is required",
                        }
                    )}
                />
                {errors.tool_name?.type === 'required' && <p role="alert">{errors.tool_name?.message}</p>}


                <label className="label">
                    <span className="label-text">Showroom Price</span>
                </label>
                <input
                    type="number"
                    className="input input-bordered"
                    placeholder='Showroom Price'
                    {...register("showroomlPrice",
                        {
                            required: "Showroom Price is required",
                        }
                    )}
                />
                {errors.price?.type === 'required' && <p role="alert">{errors.price?.message}</p>}

                <label className="label">
                    <span className="label-text">Selling Price</span>
                </label>
                <input
                    type="number"
                    className="input input-bordered "
                    placeholder='Selling Price'
                    {...register("resalePrice",
                        {
                            required: "Selling Price is required",
                        }
                    )}
                />
                {errors.price?.type === 'required' && <p role="alert">{errors.price?.message}</p>}
                <label className="label">
                    <span className="label-text">Brand Name</span>
                </label>
                <select
                    className="select select-bordered w-full "
                    {...register("categotyName")}

                >
                    {
                        brands.map((brand, index) => <option
                            key={index}
                            value={brand.categotyName}
                        >
                            {brand.categotyName.toUpperCase()}
                        </option>)
                    }

                </select>
                <label className="label">
                    <span className="label-text">Years Of Use</span>
                </label>
                <input
                    type="number"
                    className="input input-bordered "
                    placeholder='Years Of Use'
                    {...register("yearsOfUse",
                        {
                            required: "Years Of Use is required",
                        }
                    )}
                />
                {errors.price?.type === 'required' && <p role="alert">{errors.price?.message}</p>}
                <label className="label">
                    <span className="label-text">Product Photo</span>
                </label>
                <input
                    type="file"
                    className="input input-bordered mb-1  py-2"
                    {...register("image",
                        {
                            required: "Image is required",
                        }
                    )}
                />
                {errors.image?.type === 'required' && <p role="alert">{errors.image?.message}</p>}

                <input type="submit" className='btn btn-info mt-6' value="Add Product" />
            </form>
        </div>
    );
};

export default AddAProduct;