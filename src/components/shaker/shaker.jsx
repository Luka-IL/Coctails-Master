import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";


const Shaker = (props) => {
  const {shakerList} = props;

  return (
    <div className="shaker col s4">
      <ul className="shaker__list">
        {shakerList.map((item) => {
          return (
            <li key={item} className="shaker__item">{item}</li>
          );
        })}
      </ul>
    </div>
  );
};

Shaker.propTypes = {
  shakerList: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  shakerList: state.shakerList
});

export { Shaker };
export default connect(mapStateToProps)(Shaker);
