import React from "react"
import { Dropdown } from "react-materialize"


const IngredientGroup = (props) => {
  const {id, ingredient} = props;
  console.log(props)

  const clickOnIngredient = (evt) => {
    evt.preventDefault();
  }

  return (
    <li className="ingredient-list__item">
      <Dropdown
        id={`Dropdown_${ingredient.group}_${id}`}
        options={{
          inDuration: 150,
          outDuration: 250,
          alignment: 'right'

        }}
        trigger={<h4 className="ingredient-group">{ingredient.title}</h4>}
      >
        {ingredient.ingredient.map((item) => {
          return (
          <a href="/" className="ingredient-group__item" onClick={clickOnIngredient}>{item}</a>
          )
        })}
      </Dropdown>
    </li>
  )
};

export default IngredientGroup;