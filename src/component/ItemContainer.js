// import React, { memo } from "react";
import { connect } from "react-redux";
import buyCake from "../Redux/Cake/CakeActions";
import { buyChocolate } from "../Redux/Chocolate/ChocolateActions";

const ItemContainer = (props) => {
  return (
    <div>
      <h1>Item : {props.item}</h1>
      <button onClick={props.buyItem}>Buy item</button>
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
const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyChocolate());
  return {
    buyItem: dispatchFunction,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
