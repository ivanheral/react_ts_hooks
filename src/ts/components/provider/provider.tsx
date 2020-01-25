import { initialState, reducer, Provider } from "../../context/context";
import { useReducer } from "react";
import React from "react";

interface PropsProvider {
  children: any;
}

export const Main: React.FC<PropsProvider> = (props: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Provider value={value}>{props.children}</Provider>;
};

export default Main;
