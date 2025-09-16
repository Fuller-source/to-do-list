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
        <form className="flex" onSubmit={handleSubmit}>
           <input
                className="border-gray-300 border-1 bg-white p-2 rounded-md flex-grow text-black focus:outline-none focus:ring-fuchsia-600"
                type="text"
                value={taskToDo}
                onChange={(e) => setTaskToDo(e.target.value)}
            />
            <button className="bg-blue-300 text-black rounded p-1 flex-auto" type="submit">+</button>
        </form>
    );
}