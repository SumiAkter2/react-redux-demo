import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyChocolate } from "../Redux/Chocolate/ChocolateActions";

const HooksChocolateContainer = () => {
  const numOfChocolate = useSelector((state) => state.chocolate.numOfChocolate);
  const dispatch = useDispatch();
  return (
    <div>
      <h5>From Hook Chocolate Container</h5>
      <h2> Num Of Chocolate:{numOfChocolate} </h2>
      <button onClick={() => dispatch(buyChocolate())}>Buy Chocolate </button>
    </div>
  );
};

export default HooksChocolateContainer;
