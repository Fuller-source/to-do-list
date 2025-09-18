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
        <form className="flex bg-onyx focus-within:ring-2 focus-within:ring-blue rounded-md text-white" onSubmit={handleSubmit}>
        <input
                className="border-l border-y border-gray-300 rounded-l-md py-2flex-grow p-1.5 focus:outline-none"
                type="text"
                value={taskToDo}
                onChange={(e) => setTaskToDo(e.target.value)}
            />
            <button className="bg-onyx border-r border-y border-gray-300 hover:bg-emerald rounded-r-md -ml-1 py-2 px-4 text-white flex justify-center items-center" type="submit">+</button>
        </form> 
    );
}