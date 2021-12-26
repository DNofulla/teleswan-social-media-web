import React, { useEffect } from "react";
import { useHistory } from "react-router";
import {} from "./feed.styled";
import { useAuthState } from "../../utils/AuthContext";
import { Redirect } from "react-router-dom";

export default function WelcomePage() {
  const history = useHistory();
  const { state, setState } = useAuthState();

  const handleLogout = async () => {
    try {
      let res = await fetch("http://192.168.1.148:8080/users/logout", {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      await localStorage.removeItem("@session");

      setState({
        isAuth: false,
        user: null,
        sessionID: null,
      });

      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Feed Screen</h1>
      <button title="Log Out Button" onClick={handleLogout}>
        Log Out
      </button>
    </div>
  );
}
