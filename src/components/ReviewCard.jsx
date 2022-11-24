import { Dropdown } from 'flowbite-react';
import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import ReviewRating from './ReviewRating';

const ReviewCard = ({ children, singleReview  }) => {
    const { title, photoURL, email, user, rating, review } = singleReview;
    // console.log(singleReview);
    return (
        <div className=" shadow  min-h-[200px] min-w-[300px] p-6   rounded-3xl">
            <div className='flex  items-center gap-6'>
                {
                    photoURL ?
                        <img src={photoURL} alt="" className='rounded-full w-16 h-16 ' />
                        :
                        <FaUserAlt className='w-16 h-16 text-center' />
                }
                <div className='text-start'>
                    <p className='text-2xl mb-2  font-serif font-semibold'>{user}</p>
                    <p className='text-lg'>{email}</p>
                </div>
            </div>
            <div className='mt-5'>
                <Dropdown.Divider />
            </div>
            <div>
                <h5 className="text-xl font-semibold font-serif tracking-tight text-indigo-700 dark:text-white">
                    {title}
                </h5>
            </div>

            <div className='mt-2'>
                <Dropdown.Divider />
            </div>

            <p className=' text-base my-4'>{review}</p>
            <ReviewRating rating={rating}></ReviewRating>
            {children}
        </div>

    );
};

export default ReviewCard;