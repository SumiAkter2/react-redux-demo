import React from "react";
import { useSelector } from "react-redux";

const HooksCakeContainer = () => {
  const numOfCake = useSelector((state) => state.numOfCake);
  return (
    <div>
      <h1>Number of Cakes : {numOfCake} </h1>
      <button onClick={""}>Buy Cake</button>
    </div>
  );
};

export default HooksCakeContainer;
