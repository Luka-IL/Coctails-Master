import React from "react";
import PropTypes from "prop-types";
import {ActionCreator} from "../../store/action";
import {Dropdown} from "react-materialize";
import {connect} from "react-redux";


const IngredientGroup = (props) => {
  const {id, ingredient, shakerList, updateShakerList} = props;

  const clickOnIngredient = (evt) => {
    evt.preventDefault();
    const newArray = shakerList.concat(evt.target.id);
    updateShakerList(newArray);
  };

  return (
    <li className="ingredient-list__item">
      <Dropdown
        id={`Dropdown_${ingredient.group}_${id}`}
        options={{
          inDuration: 150,
          outDuration: 250,
          alignment: `right`

        }}
        trigger={<h4 className="ingredient-group">{ingredient.title}</h4>}
      >
        {ingredient.ingredients.map((item) => {
          return (
            <a key={item} href="/" className="ingredient-group__item" onClick={clickOnIngredient} id={item}>{item}</a>
          );
        })}
      </Dropdown>
    </li>
  );
};

IngredientGroup.propTypes = {
  id: PropTypes.number.isRequired,
  ingredient: PropTypes.object.isRequired,
  shakerList: PropTypes.array.isRequired,
  updateShakerList: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  shakerList: state.shakerList
});

const mapDispatchToProps = (dispatch) => ({
  updateShakerList(shakerList) {
    dispatch(ActionCreator.updateShakerList(shakerList));
  }
});

export {IngredientGroup};
export default connect(mapStateToProps, mapDispatchToProps)(IngredientGroup);
