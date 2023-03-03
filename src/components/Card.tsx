import { Robot } from "../containers/App";

import React from "react";

type CardProps = {
  robot: Robot;
};

const Card = ({ robot }: CardProps) => {
  return (
    <div className="bg-light-green dib tc br3 pa3 ma2 grow bw2 shadow-5 pointer">
      <img
        alt="pic"
        src={`https://robohash.org/${robot.id}?size=200x200`}
      ></img>
      <div>
        <h2>{robot.name}</h2>
        <p>{robot.email}</p>
      </div>
    </div>
  );
};

export default Card;
