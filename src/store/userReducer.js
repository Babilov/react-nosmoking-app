const defaultStore = {
  displayName: null,
  email: null,
  uid: null,
};

const SET_USER = "SET_USER";
const LOGOUT_USER = "LOGOUT_USER";

export const userReducer = (store = defaultStore, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...store,
        displayName: action.payload.displayName,
        email: action.payload.email,
        uid: action.payload.uid,
      };

    case LOGOUT_USER:
      return {
        ...store,
        displayName: null,
        email: null,
        uid: null,
      };

    default:
      return { ...store };
  }
};

export const setUser = (payload) => ({ type: SET_USER, payload });
export const logoutUser = () => ({ type: LOGOUT_USER });
