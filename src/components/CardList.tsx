import React from "react";
import Card from "./Card";

import { Robot } from "../containers/App";

type CardListProps = {
  robots: Robot[];
};

const CardList = ({ robots }: CardListProps) => (
  <div className="pa2">
    {robots.map((robot, i) => {
      return <Card key={i} robot={robot} />;
    })}
  </div>
);

export default CardList;
