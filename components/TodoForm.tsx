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
                className="border-l border-y border-gray-300 rounded-l-md py-2 bg-blue flex-grow text-black"
                type="text"
                value={taskToDo}
                onChange={(e) => setTaskToDo(e.target.value)}
            />
            <button className="bg-blue border-r border-y border-gray-300 rounded-r-md -ml-1 py-2 px-4  flex justify-center items-center" type="submit">
                <span className="hover:bg-emerald">
                    +
                </span>
            </button>
        </form> 
    );
}