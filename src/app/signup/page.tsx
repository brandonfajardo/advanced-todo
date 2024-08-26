"use client";

import { useState } from "react";

const Signup = () => {
  const [usernameValue, setUsernameValue] = useState<any>();
  const [passwordValue, setPasswordValue] = useState<any>();
  const [error, setError] = useState<any>()
  const [success, setSuccess] = useState<any>()

  const signUp = async (e: React.FormEvent<HTMLFormElement>) => {
    setError('')
    setSuccess('')
    setUsernameValue('')
    setPasswordValue('')

    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: usernameValue,
          password: passwordValue,
        }),
      });

      const data = await response.json();
      
      if (data.status !== 200) {
        throw new Error(data.message)
      } else {
        setSuccess(data.message)
      }
    } catch (error: any) {
        setError(error.message)
    }
  };

  return (
    <>
      <h1>Signup</h1>
      <form onSubmit={signUp}>
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
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
    </>
  );
};

export default Signup;
