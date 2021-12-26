import React, { useEffect } from "react";

import WelcomePage from "./pages/WelcomePage/WelcomePage";
//import NavigationBar from "./components/NavigationBar/NavigationBar";
import Login from "./components/Authentication/Login/Login";
import Register from "./components/Authentication/Register/Register";
import FeedPage from "./pages/FeedPage/FeedPage";
import { useAuthState } from "./utils/AuthContext";
import { AuthRoute } from "./components/AuthRoute";
import { PublicRoute } from "./components/PublicRoute";

function App() {
  const { setState } = useAuthState();

  useEffect(() => {
    const ac = new AbortController();
    const session = JSON.parse(localStorage.getItem("@session"));
    let authCondition =
      session &&
      Date.parse(session.cookie.expires) > Date.now() &&
      session.sessionID &&
      session.passport.user
        ? true
        : false;

    setState({
      isAuth: authCondition ? true : false,
      user: authCondition ? session.passport.user : null,
      sessionID: authCondition ? session.sessionID : null,
    });

    return () => ac.abort();
  }, [setState]);

  return (
    <>
      <PublicRoute exact path="/" component={WelcomePage} />
      <PublicRoute exact path="/login" component={Login} />
      <PublicRoute exact path="/register" component={Register} />
      <AuthRoute exact path="/feed" component={FeedPage} />
    </>
  );
}

export default App;
