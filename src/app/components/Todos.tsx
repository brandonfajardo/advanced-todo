"use client";
import { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

const Todos = () => {
  const [inputValue, setInputValue] = useState<string>();
  const [todos, setTodos] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const response = await fetch("http://localhost:8080/todos");

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const todos = await response.json();
        setTodos(todos);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error("Error fetching todos:", error);
      }
    };

    setTimeout(() => {
      getTodos();
    }, 1000);
  }, []);

  const submit = async () => {
    if (!inputValue) return;

    setTodos([
      ...todos,
      {
        text: inputValue,
        completed: false,
      },
    ]);
    setInputValue("");
  };
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={submit}>Submit</button>
      <br />

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {todos.map((todo: any) => {
            return <p key={todo.text}>{todo.text}</p>;
          })}
        </>
      )}
    </div>
  );
};

export default Todos;
