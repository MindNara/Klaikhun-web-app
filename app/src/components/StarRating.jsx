import React from 'react';

const StarRating = ({ rating }) => {

  const solidStars = rating;
  const regularStars = 5 - rating;

  const solidStar = <i className="fa-solid fa-star"></i>; // Font Awesome solid star icon
  const regularStar = <i className="fa-regular fa-star"></i>; // Font Awesome regular star icon

  return (
    <div>
      {[...Array(solidStars)].map((_, i) => (
        <span key={i}>{solidStar}</span>
      ))}
      {[...Array(regularStars)].map((_, i) => (
        <span key={i}>{regularStar}</span>
      ))}
    </div>
  );
};

export default StarRating;