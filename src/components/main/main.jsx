import React from "react";
import IngredientGroup from "../ingredient-group/ingredient-group";
import Shaker from "../shaker/shaker";
import {ingredients} from "../../mock";
import {alcoholFilter, notAlcoholFilter} from "../../utils";

const Main = () => {
  return (
    <main className="main">
      <h2 className="main__title">SHAKER</h2>
      <div className="place-mixology row">
        <div className="col s4 ingredient">
          <h3 className="place-mixology__title ingredient__title">Alcohol</h3>
          <ul className="ingredient-list">
            {alcoholFilter(ingredients).map((item, id) => {
              return (
                <IngredientGroup
                  key={item.title}
                  ingredient={item}
                  id={id}
                />
              );
            }
            )}
          </ul>
        </div>
        <Shaker />
        <div className="ingredient col s4">
          <h3 className="place-mixology__title ingredient__title">Not Alcohol</h3>
          <ul className="ingredient-list">
            {notAlcoholFilter(ingredients).map((item, id) => {
              console.log(item.title)
              return (
                <IngredientGroup
                  key={item.title}
                  ingredient={item}
                  id={id}
                />
              );
            }
            )}
          </ul>
        </div>
      </div>
      <button className="shaker-mix-button">Shake that</button>
    </main>
  );
};
export default Main;
