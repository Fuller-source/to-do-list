'use client' // This tells next that the component needs to run in browser, giving it access to browser APIs like local storage
             // This is essential because this component uses useState and useEffect, which are client-side hooks.

import React, {useEffect, useRef, useState} from 'react'
import { TodoForm } from './TodoForm'
import { TodoItem } from './TodoItem'
import Sortable from 'sortablejs'

/**
 * Defining the shape of a to-do item using a TypeScript interface.
 * This is what makes ts valuable.
 * It is valuable because it provides type safety and autocompletion.
 * This interface is used in multiple places, so I export it?
 */
export interface Todo{
    id: number
    task: string
    completed: boolean
}
/**
 * @returns The List component is the main interactive part of the to-do app.
 * It manages the state of the to-do items, handles adding, deleting, and completing tasks,
 * and renders the list of tasks along with the form to add new ones.
 */
export function List(){
    const [todos, setTodos] = useState<Todo[]>([]) // initializes the component's state. todos holds the list of tasks. setTodos is the function I use to update it.
    const listRef = useRef(null)

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
     * The code converts the todos array to a string and saves it to localStorage, to ensure persistence.
     */
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    },[todos]) // runs whenever todos changes

    /**
     * Initializes Sortable.js on the <ul> element.
     */
    useEffect(() => {
        let sortableInstance: Sortable | null = null;

        // Ensure ref is attached to the Dom element before init
        if (listRef.current){
            sortableInstance = Sortable.create(listRef.current, {
                animation: 150,
                // This class is applied to dragged item for visual feedback
                ghostClass: 'sortable-ghost',
                handle: '.drag-handle',
                draggable: '.draggable-item',
                // Crucial: this tells Sortable what to do when an item is dropped
                onUpdate: function(evt){
                    /// Included type checks to satisfy TypeScript's safety requirements for SortableJS event properties.
                    const oldIndex = evt.oldIndex
                    const newIndex = evt.newIndex

                    if (oldIndex !== undefined && newIndex !== undefined){
                        handleDragEnd(oldIndex, newIndex)
                    }
                },
            })
        }
        return () => {
        if (sortableInstance) {
            sortableInstance.destroy();
        }
    };
    },[listRef]) // Setting this dependency to satisfy React's linter

    /**
     * Properly doc
     * @param oldIndex 
     * @param newIndex 
     */
    function handleDragEnd(oldIndex: number, newIndex: number){
        setTodos(currentTodos => {
            const newTodos = [...currentTodos]
            if (newIndex !== oldIndex){
                const [removedtodo] = newTodos.splice(oldIndex, 1)
                newTodos.splice(newIndex, 0, removedtodo)
            }
            return newTodos;
        })
        
    }

    /**
     * This function is called when a new task is submitted. It modifies the state in an immutable way.
     * It creates a new Todo object, uses spread operator to create new array with old tasks plus new one.
     */
    function handleAddTask(newTask: string){
        const todoItem = { 
            id: Date.now(), // Using timestamp as a simple unique id for each task
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
        const newTodos = todos.filter(task => task.id != id) // filter returns a new array, so this is immutable
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
                return {...task, completed: !task.completed} // ... copies all existing properties, and then I override the completed property with true, to ensure immutability.
            } 
            return task // for all other tasks, return them unchanged
        });
        setTodos(newTodos)
    }

    /**
     * Handles the reordering of todos when the user clicks the up or down buttons.
     * @param id The id of the todo to move.
     * @param direction The direction to move the todo (up or down).
     * @returns void
     */
    function handleReorderTask(id: number, direction: 'up' | 'down'){
        const index: number = (todos.findIndex(todo => todo.id === id));
        if ((index === 0 && direction === 'up') || (index === todos.length - 1 && direction === 'down')) {
            return
        } else {
            const newIndex = (direction === 'up') ? index - 1 : index + 1
            const todosCopy = [...todos]
            const [removedTodo] = todosCopy.splice(index, 1) // Remove the particular todo and get it
            todosCopy.splice(newIndex, 0, removedTodo)  // Re-insert the item
            setTodos(todosCopy)
        }
    }

    /**
     * The component's render method. It returns JSX that defines the UI.
     * It maps over the todos array to render a TodoItem for each task,
     * passing down the necessary props and handlers.
     * It also includes the TodoForm component for adding new tasks.
     */
    return (
        <div className="w-full max-w-md">
            <ul ref={listRef}>
                {todos.map((todo) => (
                    // This component represents a single to-do item in the list. It receives the todo object and the handlers as props. It passes the id to the handlers so they know which task to act on. The onDelete and onComplete props are functions that get called when the user interacts with the item.
                    <TodoItem
                        todo={todo}
                        key={todo.id} // React requires a unique key prop for list items to optimize rendering. This does not get passed to the component.
                        // Arrow functions are used to create a new function that calls handleDeleteTask and handleCompleteTask with the specific id
                        onDelete={() => handleDeleteTask(todo.id)} 
                        onComplete={() => handleCompleteTask(todo.id)}
                        onReorder={handleReorderTask} // Passing the reorder handler directly, since it already takes the id as an argument and direction                        
                    />
                ))}
            </ul>
            {/* The TodoForm, found in the same directory, component is responsible for rendering the input field and handling form submission */}
            <TodoForm onAdd={handleAddTask} />
        </div>
    )   
}