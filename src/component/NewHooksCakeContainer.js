import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import buyCake from "../Redux/Cake/CakeActions";

const NewHooksCakeContainer = () => {
  const [number, setNumber] = useState(1);
  const numOfCake = useSelector((state) => state.cake.numOfCake);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>It's from New Hook Cake Container</h2>
      <h2>Number of Cakes : {numOfCake}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => dispatch(buyCake(number))}>
        Buy {number} Cake
      </button>
    </div>
  );
};

export default NewHooksCakeContainer;
