import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuthState } from "../utils/AuthContext";

export const AuthRoute = ({ component: Component, ...rest }) => {
  const { state } = useAuthState();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (state.isAuth) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};
