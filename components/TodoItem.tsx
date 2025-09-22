'use client'

import {Todo} from "./TodoList"

// When you are defining multiple props for a component, you create an interface to describe the shape of the props object, then I use that interface in the function signature
interface TodoItemProps{
    todo: Todo;
    onComplete: (id: number) =>void;
    onDelete: (id: number) => void;
    
}

export const TodoItem = ({todo, onDelete, onComplete}: TodoItemProps) => {
    return (
        <li className="my-1 border-black border-5 flex items-stretch rounded-2xl justify-between bg-paledogwood min-h-[58px] w-full">
            <label className="flex items-center p-4 cursor-pointer">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onComplete(todo.id)}
                    className="peer sr-only"
                />
                
                {/* Corrected 'transition-all' to the standard 'transition' class */}
                <div className="relative w-6 h-6 bg-white border-2 border-black rounded-md
                                peer-checked:bg-emerald peer-checked:border-emerald
                                transition duration-200 ease-in-out">
                    {/* SIMPLIFICATION: 
                      Removed the JS ternary. Now the opacity is controlled purely by CSS
                      based on the peer input's checked state.
                    */}
                    <svg
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-white
                                   opacity-0 peer-checked:opacity-100 transition-opacity"
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
            <span
                className={`ml-2 text-black py-1 ${todo.completed ? 'line-through' : ''} w-0 flex-1 break-words`}
            >
                {todo.task}
            </span>
            <button
                className="hover:bg-red hover:text-white rounded-r-lg px-4 text-black ml-4 transition ease-in-out duration-200"
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