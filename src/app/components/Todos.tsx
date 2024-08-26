"use client";
import { useState } from "react"

const Todos = () => {
    const [inputValue, setInputValue] = useState<string>()
    const [todos, setTodos] = useState<any>([])

    const submit = () => {
        if (!inputValue) return

        setTodos([...todos, {
            text: inputValue,
            completed: false
        }])
        setInputValue('')
    }
    return (
        <div>
            <input type='text' value={inputValue} onChange={e => setInputValue(e.target.value)} />
            <button onClick={submit}>Submit</button>
            <br />
            {todos.map((todo: any) => {
                return <p key={todo.text}>{todo.text}</p>
            })}
        </div>
    )
}

export default Todos