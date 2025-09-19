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
        <form className="flex border border-emerald bg-onyx items-stretch justify-between w-full focus-within:ring-2 focus-within:ring-blue rounded-md text-white p-2" onSubmit={handleSubmit}>
        <input
                className=" rounded-l-md py-2 flex-grow p-1.5 focus:outline-none"
                type="text"
                value={taskToDo}
                onChange={(e) => setTaskToDo(e.target.value)}
            />
            <button className="bg-onyx  hover:bg-emerald rounded-r-md px-4 text-white" type="submit">+</button>
        </form> 
    );
}