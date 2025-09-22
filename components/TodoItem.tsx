'use client' // This tells next that the component needs to run in browser, giving it access to browser APIs like local storage
             // This is essential because this component is interactive, relying on props that are functions to handle user actions.

import {Todo} from "./TodoList" 

/**
 * Defining the props that the TodoItem component expects.
 * This includes the todo object itself, and two functions for handling completion and deletion of the task.
 */
interface TodoItemProps{
    todo: Todo;
    onComplete: (id: number) =>void;
    onDelete: (id: number) => void;
    
}

/**
 * TodoItem component represents a single to-do item in the list.
 * It displays the task, a checkbox to mark it as completed, and a button to delete it.
 * The only job of this component is to render the UI for a single task and call the appropriate handlers when the user interacts with it.
 * Data flows down via props, and events flow up via the onComplete and onDelete callbacks.
 * @param param0 - The props for the component
 * @returns JSX.Element
 */
export const TodoItem = ({todo, onDelete, onComplete}: TodoItemProps) => {
    return (
        // The list item is styled with Tailwind CSS
        <li className="my-1 border-black border-5 flex items-center rounded-2xl justify-between bg-paledogwood min-h-[58px] w-full">
            {/* The label wraps the checkbox and the task text */}
            <label className="flex items-center p-4 cursor-pointer">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onComplete(todo.id)} // Calls the onComplete handler with the task's id when the checkbox is toggled
                    className="peer sr-only" // peer allows styling of sibling elements based on this input's state; sr-only keeps it accessible but hidden
                />

                {/* Custom checkbox */}
                <div className="relative w-6 h-6 bg-white border-2 border-black rounded-md text-transparent peer-checked:text-black peer-checked:bg-emerald peer-checked:border-emerald transition duration-200 ease-in-out">
                    {/* Checkmark icon, only visible when the checkbox is checked */}
                    <svg
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
            </label>

            {/* Task text */}
            <span
                className={`ml-2 text-black py-1 ${todo.completed ? 'line-through' : ''} w-0 flex-1 break-words select-none`}
            >
                {todo.task}
            </span>
            {/* Delete button */}
            <button
                className="hover:bg-red hover:text-white rounded-r-lg self-stretch px-4 text-black ml-4 transition ease-in-out duration-200"
                onClick={() => onDelete(todo.id)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                </svg>
            </button>
        </li>
    )
}