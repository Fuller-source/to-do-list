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
        <li className="flex bg-paledogwood text-black p-2 rounded flex-wrap w-full max-w-xl">
            <input type="checkbox" checked={todo.completed} name="status"  value={todo.id} onChange={() => onComplete(todo.id)}/>
            <span className={`break-words ${todo.completed ? 'line-through' : ''} w-full`}>
                {todo.task}
            </span>

            <button className="hover:bg-emerald" onClick={() => onDelete(todo.id)}>-</button>
        </li>
    )
}