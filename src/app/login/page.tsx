"use client";

import { useState } from "react";

const Login = () => {
  const [usernameValue, setUsernameValue] = useState<any>();
  const [passwordValue, setPasswordValue] = useState<any>();

  const login = async (e: any) => {
    e.preventDefault();

    try {
        const response = await fetch("http://localhost:8080/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: usernameValue,
            password: passwordValue,
          }),
        });

      } catch (error: any) {
        console.log('error ==>', error)
      }
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={login}>
        <input
          value={usernameValue}
          onChange={(e) => setUsernameValue(e.target.value)}
        />
        <input
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Login;
