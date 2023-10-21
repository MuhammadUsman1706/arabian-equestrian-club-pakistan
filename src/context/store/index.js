import { createContext, useReducer } from "react";
import AppReducer from "../reducers/AppReducer";

const initialState = {
  horses: [],
  horseId: 0,
  user: {},
  imageFile: null,
  IsMobileMenu: false,
  isSearch: false,
  isLoggedIn: false,
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const setAuthUser = (data) => {
    dispatch({
      type: "SET_USER",
      payload: data,
    });
  };

  const unsetAuthUser = () => {
    dispatch({
      type: "UNSET_USER",
    });
  };

  const setImageFile = (data) => {
    dispatch({
      type: "SET_IMG",
      payload: data,
    });
  };

  const loadHorses = (data) => {
    dispatch({
      type: "SET_HORSES",
      payload: data,
    });
  };
  const setHorseId = (id) => {
    dispatch({
      type: "SET_HORSE_ID",
      payload: id,
    });
  };
  const setMobileMenu = (status) => {
    dispatch({
      type: "SET_MOB_MENU",
      payload: status,
    });
  };
  const setSearch = (status) => {
    dispatch({
      type: "SET_MOB_SEARCH",
      payload: status,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        setHorseId,
        horseId: state.horseId,
        loadHorses,
        horses: state.horses,
        setAuthUser,
        user: state.user,
        unsetAuthUser,
        isLoggedIn: state.isLoggedIn,
        setImageFile,
        imageFile: state.imageFile,
        setMobileMenu,
        isMobileMenu: state.isMobileMenu,
        setSearch,
        isSearch: state.isSearch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
