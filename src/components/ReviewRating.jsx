import { Rating } from 'flowbite-react';
import React from 'react';

const ReviewRating = ({ rating }) => {
    console.log(rating)
    const rat = rating || 1;
    return (
        <Rating>
            {
                [...Array(parseInt(rat)).keys()].map((rat, index) => <Rating.Star key={index} />)
            }
            {
                [...Array(5 - parseInt(rat)).keys()].map((rat, index) => <Rating.Star key={index} filled={false} />)
            }
            <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                {rating || 1}/5
            </span>
        </Rating>
    );
};

export default ReviewRating;