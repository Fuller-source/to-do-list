'use client'

import React, {useState} from 'react';
import { TodoForm } from './TodoForm';
import { TodoItem } from './TodoItem';
import { todo } from 'node:test';

export interface Todo{
    id: number;
    task: string;
    completed: boolean;
}

export function List(){
    //const [todos, setToDos] = useState<ToDo[]> ([]);
    const [todos, setTodos] = useState<Todo[]>([
        
    ]);

    function handleAddTask(newTask: string){
        const todoItem = {
            id: Date.now(),
            task: newTask,
            completed: false,
        };
        setTodos([...todos, todoItem])
    }

    function handleDeleteTask(id: number){
        const newTodos = todos.filter(task => task.id != id)
        setTodos(newTodos);
    }
    return(
            <ul>
                {todos.map((todo) => (
                    <TodoItem todo={todo} key={todo.id} onDelete={() => handleDeleteTask(todo.id)} />
                ))}
                <TodoForm onAdd={handleAddTask}/>
            </ul>
    )   
}



