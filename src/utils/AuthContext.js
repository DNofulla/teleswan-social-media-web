import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, setState] = useState({
    isAuth: false,
    user: null,
    sessionID: null,
  });

  return (
    <AuthContext.Provider value={{ state, setState }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthState = () => {
  const { state, setState } = useContext(AuthContext);

  return { state, setState };
};

export const useAuth = () => {
  const register = async (
    username,
    password,
    email,
    setUsername,
    setPassword,
    setEmail,
    history,
  ) => {
    let hasError = false;

    if (!username || !password || !email) {
      alert("An error has occurred! Don't leave Empty Fields!");
      hasError = true;
    } else if (
      // eslint-disable-next-line
      !/^[a-zA-Z0-9._][^~`!@#$%^&*()\-+={}\[ \];:'"<|>,/?]{4,24}$/.test(
        username,
      )
    ) {
      alert(
        "An error has occurred! Please enter a username 4 to 24 characters long!",
      );
      hasError = true;
    } else if (
      // eslint-disable-next-line
      !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[~`!@#$%^&*()_\-+={}\[ \];:'"<|>,./?])(?=.*[a-zA-Z]).{8,24}$/.test(
        password,
      )
    ) {
      alert(
        "An error has occurred! Please enter a password 8 to 24 characters long that contains at least 1 Upper Case letter, 1 Lower Case letter, 1 Number and 1 Special Character!",
      );
      hasError = true;
    } else if (
      !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
        email,
      )
    ) {
      alert("An error has occurred! Please enter a valid email!");
      hasError = true;
    }

    if (hasError === false) {
      try {
        // eslint-disable-next-line
        let res = await fetch("http://192.168.1.148:8080/users/register", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            displayName: username,
            email: email,
            password: password,
          }),
        });

        alert("Success! Your account has been successfully created!");
        setUsername("");
        setEmail("");
        setPassword("");
        history.push("/login");
      } catch (error) {
        console.error(error);
        alert("An error has occurred! Please provide valid information!");
        setUsername("");
        setEmail("");
        setPassword("");
      }
    }
  };

  const login = async (
    username,
    password,
    setUsername,
    setPassword,
    history,
    setState,
  ) => {
    let hasError = false;

    if (!username || !password) {
      alert("An error has occurred! Don't leave Empty Fields!");
      hasError = true;
    }

    if (hasError === false) {
      try {
        let res = await fetch("http://192.168.1.148:8080/users/login", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        });

        const json = await res.json();

        // console.log(json);

        try {
          const jsonValue = JSON.stringify(json);
          await localStorage.setItem("@session", jsonValue);

          const session = JSON.parse(localStorage.getItem("@session"));

          let authCondition =
            session &&
            Date.parse(session.cookie.expires) > Date.now() &&
            session.sessionID &&
            session.passport.user;

          setState({
            isAuth: authCondition ? true : false,
            user: authCondition ? session.passport.user : null,
            sessionID: authCondition ? session.sessionID : null,
          });

          // console.log(state);
        } catch (e) {
          console.log(`Error storing session to Local Storage: \n${e}`);
        }

        setUsername("");
        setPassword("");
        if (json.message) {
          alert(json.message);
        } else {
          history.push("/feed");
        }
      } catch (error) {
        console.error(error);
        alert("An error has occurred!");
        setUsername("");
        setPassword("");
      }
    }
  };

  const logout = async (history, setState) => {
    try {
      // eslint-disable-next-line
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

  return { register, login, logout };
};
