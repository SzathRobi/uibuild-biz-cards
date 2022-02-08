import React from "react";
import "./card.css";

function Card({ name, restaurant, address }) {
  const nameLetterArr = name.split("");
  const restaurantLetterArr = restaurant.split("");
  const streetLetterArr = address.street.split("");
  const zipcodeLetterArr = address.zipcode.split("");
  const countryLetterArr = address.country.split("");

  return (
    <div className="Card">
      <h2>
        {nameLetterArr.map((letter, index) => (
          <span style={{ animationDelay: `${(5 + index) * 50}ms` }} key={index}>
            {letter}
          </span>
        ))}
      </h2>
      <h6>
        {restaurantLetterArr.map((letter, index) => (
          <span
            style={{ animationDelay: `${(15 + index) * 50}ms` }}
            key={index}
          >
            {letter}
          </span>
        ))}
      </h6>
      <p>
        {streetLetterArr.map((letter, index) => (
          <span
            style={{ animationDelay: `${(25 + index) * 50}ms` }}
            key={index}
          >
            {letter}
          </span>
        ))}{" "}
        <br />
        {zipcodeLetterArr.map((letter, index) => (
          <span
            style={{ animationDelay: `${(45 + index) * 50}ms` }}
            key={index}
          >
            {letter}
          </span>
        ))}{" "}
        <br />
        {countryLetterArr.map((letter, index) => (
          <span
            style={{ animationDelay: `${(65 + index) * 50}ms` }}
            key={index}
          >
            {letter}
          </span>
        ))}
      </p>
    </div>
  );
}

export default Card;
