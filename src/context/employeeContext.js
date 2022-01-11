import React, { createContext, useContext, useReducer } from "react";

const EmployeeSystemContext = createContext();

/**
  * Main reducer of the app
  */
const employeeSystemReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_EMPLOYEES":
      return { ...state, employees: action.payload };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

/**
  * Context Provider
  */
const EmployeeSystemProvider = ({ children }) => {
  const [state, dispatch] = useReducer(employeeSystemReducer, {});
  const value = { state, dispatch };
  return (
    <EmployeeSystemContext.Provider value={value}>{children}</EmployeeSystemContext.Provider>
  );
}

/**
  * Custom hook that return dispatch function and state
  */
const useEmployeeSystemContext = () => {
  const context = useContext(EmployeeSystemContext);
  if (context === undefined) {
    throw new Error("useEmployeeSystemContext must be used within a employeeSystemProvider");
  }
  return context;
}
export { EmployeeSystemProvider, useEmployeeSystemContext };
