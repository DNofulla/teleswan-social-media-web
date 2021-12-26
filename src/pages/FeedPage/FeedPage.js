import React from "react";
import { useHistory } from "react-router";
import {} from "./feed.styled";
import { useAuthState } from "../../utils/AuthContext";
import { useAuth } from "../../utils/AuthContext";

export default function WelcomePage() {
  const history = useHistory();
  const { setState } = useAuthState();
  const { logout } = useAuth();

  const handleLogout = async () => {
    logout(history, setState);
  };

  return (
    <div>
      <h1>Auth Screen</h1>
      <button title="Log Out Button" onClick={handleLogout}>
        Log Out
      </button>
    </div>
  );
}
