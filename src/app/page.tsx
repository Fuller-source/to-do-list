import {List} from "../../components/TodoList" // In order to use the List component, I need to import it from the components directory

/**
 * The job of this file is to set up the basic page layout and then render the List component inside it.
 * This is a server component, which is suitable for this purpose since it just needs to render the static structure of the page.
 * 
 * @returns The main page of the application, which includes a header and the to-do list.
 */
export default function Home() {
  return (
    // Using tailwind flexbox utilities to stack children vertically and center horizontally
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-white text-5xl font-display p-5 bg-onyx rounded-2xl">To-Do</h1>
      {/* Rendering the interactive List component, which handles displaying and managing the to-do items */}
      <List />
    </div>
  );
}
