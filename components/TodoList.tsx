'use client'

import React, {useState} from 'react'
import { TodoForm } from './TodoForm'
import { TodoItem } from './TodoItem'
import { todo } from 'node:test'

export interface Todo{
    id: number
    task: string
    completed: boolean
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
        setTodos(newTodos)
    }

    function handleCompleteTask(id: number){
        const newTodos = todos.map(task => {
            if (task.id === id){
                if (task.completed == false){
                    return {...task, completed: true} // ... copies all existing properties, and then I override the completed property with true, to ensure immutability.
                }
                return {...task, completed: false}
            } 
            return task
        });
        setTodos(newTodos)
    }

    return(
            <ul>
                {todos.map((todo) => (
                    <TodoItem todo={todo} key={todo.id} onDelete={() => handleDeleteTask(todo.id)} onComplete={() => handleCompleteTask(todo.id)} />
                ))}
                <TodoForm onAdd={handleAddTask}/>
            </ul>
    )   
}



