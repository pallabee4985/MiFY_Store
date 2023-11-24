import React from 'react';
import "./stars.css"


const StarRating = ({ stars }) => {
  const getStars = () => {
    const totalStars = 5; // Total stars to be displayed
    const fullStars = Math.floor(stars); // Number of full stars
    const remainingStars = totalStars - fullStars; // Remaining stars (partial star)

    const starIcons = [];

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      starIcons.push(<span key={i}>&#9733;</span>); // Unicode for a filled star
    }

    // Partial star (if any)
    if (remainingStars > 0 && remainingStars < 1) {
      starIcons.push(<span key="half" className="halfStar">&#9733;&#189;</span>); // Unicode for a half-filled star
    }

    // Empty stars (if any)
    const emptyStars = totalStars - fullStars - (remainingStars < 1 ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      starIcons.push(<span key={`empty_${i}`}>&#9734;</span>); // Unicode for an empty star
    }

    return starIcons;
  };

  return (
    <div className="starRating">
      {getStars().map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </div>
  );
};

export default StarRating;

