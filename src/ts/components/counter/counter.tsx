import React, { useContext } from "react";
import { ctxt } from "../../context/context";
import "./counter.scss";

const Counter: React.FC = () => {
  const { state } = useContext(ctxt);

  return <p className="counter">Counter: {state.count}</p>;
};

export default Counter;
