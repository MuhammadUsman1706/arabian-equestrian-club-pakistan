export default (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
      };
    case "UNSET_USER":
      return {
        ...state,
        user: [],
        isLoggedIn: false,
      };

    case "SET_DOGS":
      return {
        ...state,
        dogs: [action.payload, ...state.dogs],
      };
    case "SET_DOG_ID":
      return {
        ...state,
        dogId: action.payload,
      };
    case "SET_IMG":
      return {
        ...state,
        imageFile: action.payload,
      };
    case "SET_MOB_MENU":
      return {
        ...state,
        isMobileMenu: action.payload,
      };

    case "SET_MOB_SEARCH":
      return {
        ...state,
        isSearch: action.payload,
      };

    default:
      return state;
  }
};
