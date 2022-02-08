import React from "react";
import "./card.css";

function Card({ name, restaurant, address, index }) {
  const letterArr = name.split("");
  console.log(letterArr);

  return (
    <div className="Card">
      <h2>
        {letterArr.map((letter, index) => (
          <span style={{ animationDelay: `${(5 + index) * 50}ms` }} key={index}>
            {letter}
          </span>
        ))}
      </h2>
      <h6>{restaurant}</h6>
      <p>
        {address.street} <br />
        {address.zipcode} <br />
        {address.country}
      </p>
    </div>
  );
}

export default Card;
