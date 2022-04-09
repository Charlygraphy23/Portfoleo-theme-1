import { useState } from "react";
import AppStore from "./index";

export type StateType = {
  contactMeModalShow: boolean;
};

type PropsType = {
  children: JSX.Element;
};

const initialState: StateType = {
  contactMeModalShow: false,
};

const ContextProvider = ({ children }: PropsType) => {
  const [state, dispatch] = useState(initialState);

  return (
    <AppStore.Provider value={{ state, dispatch }}>
      {children}
    </AppStore.Provider>
  );
};

export default ContextProvider;
