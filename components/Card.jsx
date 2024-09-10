import React from "react";
import Image from "next/image";
const Card = ({ drink }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={drink.strDrinkThumb} alt={drink.strDrink} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{drink.strDrink}</h2>
        <p>
          <strong>Category:</strong> {drink.strCategory}
        </p>
        <p>
          <strong>Glass:</strong> {drink.strGlass}
        </p>
        <p>
          <strong>Alcoholic:</strong> {drink.strAlcoholic}
        </p>
        <p>
          <strong>Instructions:</strong> {drink.strInstructions}
        </p>
        <div>
          <h3 className="text-lg font-bold">Ingredients</h3>
          <ul>
            {drink.strIngredient1 && (
              <li>
                {drink.strMeasure1} {drink.strIngredient1}
              </li>
            )}
            {drink.strIngredient2 && (
              <li>
                {drink.strMeasure2} {drink.strIngredient2}
              </li>
            )}
            {drink.strIngredient3 && (
              <li>
                {drink.strMeasure3} {drink.strIngredient3}
              </li>
            )}
            {drink.strIngredient4 && (
              <li>
                {drink.strMeasure4} {drink.strIngredient4}
              </li>
            )}
          </ul>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
