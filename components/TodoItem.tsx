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
            <input
                type="checkbox"
                checked={todo.completed}
                name="status"
                value={todo.id}
                onChange={() => onComplete(todo.id)}
                className="accent-emerald p-4 m-4 self-center"
            />
            <span
                className={`ml-2 text-black ${todo.completed ? 'line-through' : ''} w-0 flex-1 break-words`}
            >
                {todo.task}
            </span>
            <button
                className="hover:bg-red hover:text-white rounded-r-lg px-4 text-black ml-4"
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