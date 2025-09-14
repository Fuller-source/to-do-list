'use client'

import React, {useState} from "react";

export const TodoForm = ({onAdd}: {onAdd: (task: string) => void }) => {
    const [taskToDo, setTaskToDo] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onAdd(taskToDo);
        setTaskToDo("");
    }

    return (
        <form onSubmit={handleSubmit}>
           <input 
                type="text"
                value={taskToDo}
                onChange={(e) => setTaskToDo(e.target.value)}
            />
            <button type="submit">+</button>
        </form>
    );
}