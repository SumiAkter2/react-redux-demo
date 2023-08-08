import React, { useState } from "react";
import buyCake from "../Redux/Cake/CakeActions";
import { connect } from "react-redux";

const NewCakeContainer = (props) => {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <div>
        <h5>It's from New Cake Container</h5>
        <h2>Number of Cakes : {props.numOfCake}</h2>
        <input type="text" value={number} onChange={(e) =>setNumber( e.target.value)} />
        <button onClick={()=>props.buyCake(number)}>Buy {number} Cake</button>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    numOfCake: state.cake.numOfCake,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
