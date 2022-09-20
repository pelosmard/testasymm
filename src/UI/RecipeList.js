import React, { useState, useEffect } from "react";
import Recipe from "../components/Recipe";
import axios from "axios";
const APIKey = "f25c41b6441745159634c8d95ad643ba";
const URL = `https://api.spoonacular.com/recipes/random?apiKey=${APIKey}&number=1`;

const RecipeList = (props) => {
  const [list, setList] = useState([]);
  // console.log(process.env);

  useEffect(() => {
    axios.get(URL).then((response) => {
      setList(response.data.recipes);
      console.log(response);
    });
  }, []);

  if (!list) return null;
  return (
    <div>
      {list.map((recipe, index) => (
        <Recipe data={recipe} key={"recipe_" + index} />
      ))}
    </div>
  );
};

export default RecipeList;
