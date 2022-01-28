import React, { useEffect } from "react";
import { useHistory } from "react-router";
import {} from "./feed.styled";
import { useAuthState } from "../../utils/AuthContext";
import { useAuth } from "../../utils/AuthContext";

export default function FeedPage() {
  const history = useHistory();
  const { state, setState } = useAuthState();
  const { logout } = useAuth();

  useEffect(() => {
    let res = fetch("http://192.168.1.148:8080/", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  }, []);

  const handleLogout = async () => {
    logout(history, setState);
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
