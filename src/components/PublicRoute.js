import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuthState } from "../utils/AuthContext";

export const PublicRoute = ({ component: Component, ...rest }) => {
  const { state } = useAuthState();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (state.isAuth) {
          return (
            <Redirect
              to={{
                pathname: "/feed",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );
};
