import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/UserContext';
import useToken from '../../hooks/useToken';
import imageUpload from '../../js/imageUpload';
import storeUserInformation from '../../js/storeUserInformation';
import Loading from '../../shared/Loading';
import SocialLogin from './SocialLogin';

const SignUp = () => {
    const { user, createUser, updateNameImage  } = useContext(AuthContext);
    const { register, formState: { errors }, reset, handleSubmit } = useForm();
    const [loadingUser, setLoadingUser] = useState(false);
    const [userInfo, setUserInfo] = useState({});

    // const [token] = useToken({ user, ...userInfo });
    const [token] = useToken(user);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    

    useEffect(() => {
        if (token) {
            storeUserInformation(userInfo);
            navigate(from, { replace: true });
        }

    }, [token, from, navigate, userInfo]);


    if (loadingUser) {
        return <Loading></Loading>
    }


    const onSubmit = data => {
        const { name, email, password, status } = data;
        setUserInfo({ name: name, email: email, status: status  })
        

        const image = data.image[0];
        setLoadingUser(true)
        // 1.Create User 
        createUser(email, password)
            .then(() => {
                //2. Image link Link create 
                imageUpload(image)
                    .then(res => res.json())
                    .then(result => {
                        if (result.success) {
                            const img = result.data.url
                            
                            //3. Update Name
                            updateNameImage(name, img)
                                .then(() => {
                                    toast.success('Name And Img Updated', { autoClose: 1000 });
                                    setLoadingUser(false);
                                    // //4. Email verification
                                    // verifyEmail()
                                    //     .then(() => {
                                    //         toast.success('Please check your email for verification link', { autoClose: 1000 })
                                    //         setLoadingUser(false);
                                    //     })
                                    //     .catch(error => {
                                    //         setLoadingUser(false);
                                    //         toast.error(error.message)
                                    //     })
                                })
                                .catch(error => {
                                    toast.error(error.message)
                                })
                        }
                    })

            })
            .catch(error => {
                toast.error(error);
                setLoadingUser(false);
            });
        reset();
    };
    return (
        <div className="hero min-h-[90vh] bg-white dark:bg-gray-800 dark:text-gray-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-80 lg:min-w-[450px] shadow-2xl bg-base-100">
                    <div className="card-body bg-base-200 text-black rounded-md">
                        <h1 className='text-2xl text-center font-semibold'>Sign Up</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="form-control ">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered mb-1 w-full"
                                placeholder='Full Name'
                                {...register("name",
                                    {
                                        required: "Full Name is required",
                                    }
                                )}
                            />
                            {errors.name?.type === 'required' && <p role="alert">{errors.name?.message}</p>}
                            <label className="label">
                                <span className="label-text">Chosse Photo</span>
                            </label>
                            <input
                                type="file"
                                className="input input-bordered mb-1 w-full py-2"
                                {...register("image",
                                    {
                                        required: "Image is required",
                                    }
                                )}
                            />
                            {errors.image?.type === 'required' && <p className='text-red-500' role="alert">{errors.image?.message}</p>}

                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                className="input input-bordered mb-1 w-full"
                                placeholder='Email'
                                {...register("email",
                                    {
                                        required: "Email Address is required",
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: "Provide a valid email"
                                        }
                                    }
                                )}
                                aria-invalid={
                                    errors.email ? "true" : "false"
                                }
                            />
                            {errors.email?.type === 'required' && <p role="alert">{errors.email?.message}</p>}
                            {errors.email?.type === 'pattern' && <p role="alert">{errors.email?.message}</p>}

                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            <input
                                type="password"
                                autoComplete='username'
                                className="input input-bordered mb-3"
                                placeholder='Password'
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Must be 6 charecters or longer",
                                    }
                                }
                                )}
                            />

                            {errors.password?.type === 'required' && <p role="alert">{errors.password?.message}</p>}
                            {errors.password?.type === 'minLength' && <p role="alert">{errors.password?.message}</p>}

                            <select
                                className="select select-bordered w-full "
                                {...register("status")}

                            >
                                <option value="Buyers">Buyers</option>
                                <option value="Seller">Seller</option>
                            </select>
                            {/* <select value={status} onChange={changeStatus} className="select select-bordered w-full ">
                                <option value="single">Buyers</option>
                                <option value="married">Seller </option>
                            </select> */}

                            <input type="submit" className='btn mt-6' value="Sign Up" />
                        </form>
                        <p className='text-xs'>Already have an account? <Link to="/login" className=' text-secondary cursor-pointer'>Please Login</Link></p>

                        <div className="divider mb-0">OR</div>

                        <SocialLogin from={from}></SocialLogin>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;