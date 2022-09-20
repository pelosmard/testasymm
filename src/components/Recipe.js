import React from "react";

const Recipe = (props) => {
  return (
    <div>
      {props.data.title}
      <img src={props.data.image} />      
      {props.data.id}
    </div>
  );
};

export default Recipe;
