import React from "react";
import { StyledCard } from "./styled/Card.styled";

export const Card = ({ item: { title, body, image }, index}) => {
  return (
    <StyledCard layout={index % 2 === 0 && "row-reverse"}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div>
        <img src={`./images/${image}`} alt="" />
      </div>
    </StyledCard>
  );
};
