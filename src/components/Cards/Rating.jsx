
import React, { useState } from 'react';
import Image from 'next/image';

const starEmpty = "/images/Star.png";
const starFilled = "/images/starFilled.jpg";  

const Rating = () => {
  const [rating, setRating] = useState(0); 

  const handleClick = (index) => {
    setRating(index + 1); 
  };

  return (
    <div className="reach-bubble">
      <div className='rating-box'>
        <div>Rate your experience with us!</div>
        <div className='star-box'>
          {[...Array(5)].map((_, index) => (
            <Image
              key={index}
              src={index < rating ? starFilled : starEmpty}
              alt="star"
              width={20}
              height={20}
              onClick={() => handleClick(index)}
              className="cursor-pointer"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rating;
