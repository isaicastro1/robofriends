import React from "react";

const Card = ({ name, email, id }) => {
  return (
    <div className="bg-light-green dib tc br3 pa3 ma2 grow bw2 shadow-5 pointer">
      <img alt="pic" src={`https://robohash.org/${id}?200x200`}></img>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
