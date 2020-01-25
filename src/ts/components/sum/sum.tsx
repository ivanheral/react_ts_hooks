import { ctxt } from "../../context/context";
import React, { useContext } from "react";

const Sum: React.FC = () => {
  const { dispatch } = useContext(ctxt);

  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: "ADD" });
        }}
      >
        ADD
      </button>
      <button
        onClick={() => {
          dispatch({ type: "SUB" });
        }}
      >
        SUB
      </button>
    </div>
  );
};

export default Sum;
