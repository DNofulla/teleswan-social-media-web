import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { AuthProvider } from "./utils/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <AuthProvider>
          <App />
        </AuthProvider>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root"),
);
