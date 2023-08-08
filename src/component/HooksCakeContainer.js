import React from "react";
import { useDispatch, useSelector } from "react-redux";
import buyCake from "../Redux/Cake/CakeActions";

const HooksCakeContainer = () => {
  const numOfCake = useSelector((state) => state.cake.numOfCake);
  const dispatch = useDispatch();
  return (
    <div>
      <h5>It's from HooksCakeContainer</h5>
      <h1>Number of Cakes : {numOfCake} </h1>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
};

export default HooksCakeContainer;
