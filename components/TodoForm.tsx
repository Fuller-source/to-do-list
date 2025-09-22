'use client' // This tells next that the component needs to run in browser, giving it access to browser APIs like local storage
             // This is essential because this component uses useState (client-side hook).

import React, {useState} from "react";


/**
 * This is a controlled component because it uses its own state to manage the input field.
 * @param param0 - onAdd is a function passed as a prop that gets called when a new task is submitted. It takes the task string as an argument.
 * @returns The TodoForm component provides a form for adding new tasks to the to-do list. It manages its own internal state for the input field and calls
 * the onAdd prop when the form is submitted.
 */
export const TodoForm = ({onAdd}: {onAdd: (task: string) => void }) => {
    const [taskToDo, setTaskToDo] = useState(""); // State to hold the current value of the input field

    /**
     * @param e - The form submission event
     * This function is called when the form is submitted. It prevents the default form submission behavior (which would reload the page),
     * calls the onAdd prop with the current task, and then clears the input field.
     */
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onAdd(taskToDo);
        setTaskToDo("");
    }

    return (
        // The form is styled with Tailwind CSS for layout and appearance
        <form className="flex my-1 border-black border-5 rounded-2xl bg-onyx items-stretch justify-between w-full focus-within:ring-2 focus-within:ring-blue" onSubmit={handleSubmit}>
            {/* The input field for adding a new task */}
            <input
                placeholder="Add a new task..."
                className="bg-onyx rounded-l-xl p-4 flex-1 focus:outline-none text-white"
                type="text"
                value={taskToDo}
                onChange={(e) => setTaskToDo(e.target.value)} // Updates state as the user types
                required // Ensures the input is not empty when submitting
            />
            {/* The submit button */}
            <button
                className="hover:bg-emerald rounded-r-xl px-4 text-white transition ease-in-out duration-200 w-12 flex items-center justify-center"
                type="submit"
            >
                +
            </button>
        </form> 
    );
}