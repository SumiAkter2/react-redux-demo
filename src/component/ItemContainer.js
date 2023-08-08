// import React, { memo } from "react";
import { connect } from "react-redux";

const ItemContainer = (props) => {
  return (
    <div>
      <h1>Item : {props.item}</h1>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCake
    : state.chocolate.numOfChocolate;
  return {
    item: itemState,
  };
};
export default connect(mapStateToProps)(ItemContainer);
