import React from "react";

const ProductRating = ({ ratingValue }) => {
  let rating = [];

  for (let i = 0; i < 5; i++) {
    rating.push(<i className='la la-star' key={i}></i>);
  }

  if (ratingValue && ratingValue > 0) {
    for (let i = 0; i <= ratingValue - 1; i++) {
      rating[i] = <i className='la la-star yellow' key={i}></i>;
    }
  }
  return <>{rating}</>;
};

export default ProductRating;
