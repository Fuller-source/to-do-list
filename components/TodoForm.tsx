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
        // 1. Removed p-2 from the form
        <form className="flex my-1 border-black border-5 rounded-2xl bg-onyx items-stretch justify-between w-full focus-within:ring-2 focus-within:ring-blue" onSubmit={handleSubmit}>
            <input
                // 2. Added padding, background, and text color to the input
                placeholder="Add a new task..."
                className="bg-onyx rounded-l-xl p-4 flex-1 focus:outline-none text-white"
                type="text"
                value={taskToDo}
                onChange={(e) => setTaskToDo(e.target.value)}
            />
            {/* 3. Removed ml-4 and bg-onyx, and adjusted rounding to match the form */}
            <button 
                className="hover:bg-emerald rounded-r-xl px-4 text-white transition ease-in-out duration-200 w-12 
               flex items-center justify-center" 
                type="submit"
            >
                +
            </button>
        </form> 
    );
}