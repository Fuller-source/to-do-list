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
        <li className="bg-yellow-200 text-black p-2 rounded">
            <input type="checkbox" checked={todo.completed} name="status"  value={todo.id} onChange={() => onComplete(todo.id)}/>
            <span className={todo.completed ? 'line-through' : ''}>
                {todo.task}
            </span>
            
            <button className="hover:bg-amber-600" onClick={() => onDelete(todo.id)}>-</button>
        </li>
    )
}