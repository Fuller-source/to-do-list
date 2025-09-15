import {List} from "../../components/TodoList"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-5xl font-display p-5">To-Do</h1>
      <List />
    </div>
  );
}
