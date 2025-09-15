'use client'

import {Todo} from "./TodoList";

// When you are defining multiple props for a component, you create an interface to describe the shape of the props object, then I use that interface in the function signature
interface TodoItemProps{
    todo: Todo;
    onDelete: (id: number) => void;
}

export const TodoItem = ({todo, onDelete}: TodoItemProps) => {
    

    return (
        <li className="bg-blue-500 text-white p-2 rounded al">
            {todo.task}
            <button className="hover:bg-amber-600" onClick={() => onDelete(todo.id)}>-</button>
        </li>
    )
}