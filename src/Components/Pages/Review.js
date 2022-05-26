import React from 'react';
import people from "../../asset/people1.png";
import people2 from "../../asset/people2.png";
import people3 from "../../asset/people3.png";
import ReviewCard from './ReviewCard';

const Review = () => {
    const reviews = [
        {
            _id: 1,
            name: "walson qury",
            loacation: "california",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people
        }
        ,  {
            _id: 2,
            name: "walson qury",
            loacation: "california",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people2
        },
        {
            _id: 3,
            name: "walson qury",
            loacation: "california",
            review: "It is a longs established facts that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people3
        }
    ]
    return (
        <section>
            <h1 className='text-3xl text-primary text-center py-28'>Reviews</h1>
            <div className='flex justify-between align-items-center'>
               
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
            {
                reviews.map(review => <ReviewCard 
                key={review._id}
                review={review}
                
                ></ReviewCard>)
            }
            </div>
        </section>
    );
};

export default Review;