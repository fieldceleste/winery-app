import React from "react";
import PropTypes from "prop-types";

function Keg (props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
      <h3>{props.name} - {props.brand}</h3>
      <hr/>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  abv: PropTypes.string,
  id: PropTypes.string,
  quantity: PropTypes.number,
  whenKegClicked: PropTypes.func
};

export default Keg;