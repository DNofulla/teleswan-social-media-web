import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Login from "./components/Authentication/Login/Login";
import Register from "./components/Authentication/Register/Register";

function App() {
  return (
    <>
      {/* <NavigationBar /> */}
      <Router>
        <Switch>
          <Route exact path="/" component={WelcomePage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
