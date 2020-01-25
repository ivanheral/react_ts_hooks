import * as React from "react";

export interface State {
  count: number;
}

interface Add {
  type: "ADD";
}

interface Sub {
  type: "SUB";
}

export type Actions = Add | Sub;

export const reducer = (state: State, action: Actions) => {
  switch (action.type) {
    case "ADD":
      return { ...state, count: state.count + 1 };
    case "SUB":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export const initialState: State = {
  count: 0
};

interface ContextProps {
  state: State;
  dispatch: ({ type: string }: any) => void;
}

export const ctxt = React.createContext({} as ContextProps);

export const Provider = ctxt.Provider;
export const Consumer = ctxt.Consumer;
