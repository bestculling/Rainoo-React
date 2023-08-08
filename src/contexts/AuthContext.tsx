import { createContext, useReducer } from "react";
import {
  AuthAction,
  AuthContextType,
  AuthProviderProps,
  AuthState,
} from "../types/auth";

const initialState = {
  isAuthenticated: false,
  user: null,
};

// Action Types
const SET_USER = "SET_USER";
const LOGOUT = "LOGOUT";

// Reducer
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case SET_USER:
      return {
        isAuthenticated: true,
        user: action.payload!,
      };
    case LOGOUT:
      return {
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
