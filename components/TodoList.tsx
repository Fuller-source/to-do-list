'use client' // tells next that the componenet needs to run in browser, giving it access to browser APIs like local storage
'use client' // tells next that the componenet needs to run in browser, giving it access to browser APIs like local storage

import React, {useEffect, useState} from 'react'
import React, {useEffect, useState} from 'react'
import { TodoForm } from './TodoForm'
import { TodoItem } from './TodoItem'
import { todo } from 'node:test'

export interface Todo{ // This is what makes ts valuable.
export interface Todo{ // This is what makes ts valuable.
    id: number
    task: string
    completed: boolean
}

export function List(){
    const [todos, setTodos] = useState<Todo[]>([]); // initializes the component's state. todos holds the list of tasks. setTodos is the function I use to update it.

    /**
     * This hook handles loading data.
     * useEffect only runs the code once when the componenet first mounts, because its dependency array is empty.
     * The code inside retrieves todos from localStorage, if they exist, it updates the state.
     */
    useEffect(() => {
        const storedTodos = localStorage.getItem("todos")
        if (storedTodos){
            setTodos(JSON.parse(storedTodos))
        }
    }, [])

    /**
     * This hook handles saving data.
     * This runs every time a variable in its dependency array changes [todos]
     * The code converts the todos array to a string and saves it to localStorage, to ensure persistance.
     */
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    },[todos])

    /**
     * This function is called when a new task is submitted. It modifies the state in an immutable way.
     * It creates a new Todo object, uses spread operator to create new array with old tasks plus new one.
     */
    function handleAddTask(newTask: string){
        const todoItem = {
            id: Date.now(),
            task: newTask,
            completed: false,
        };
        setTodos([...todos, todoItem])
    }

    /**
     * Recieves a to-do item's id and uses filter to create a new array
     * with every todo that does not match the one with id
     */
    function handleDeleteTask(id: number){
        const newTodos = todos.filter(task => task.id != id)
        setTodos(newTodos)
    }

    /**
     * Called when a task is checked or unchecked. Uses map method
     * to iterate over the todos array and create a new array. 
     * If the task has the matching id, it uses the spread 
     * operator to create a new object with the completed status toggled.
     */
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
                    // Three props are passed. todo: data for specific item. key: uid for React to track them. onDelete/onComplete allow the child comp to comm with parent and modify state.
                    <TodoItem todo={todo} key={todo.id} onDelete={() => handleDeleteTask(todo.id)} onComplete={() => handleCompleteTask(todo.id)} />
                ))}
                <TodoForm onAdd={handleAddTask}/>
            </ul>
    )   
}



