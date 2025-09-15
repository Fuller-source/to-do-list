import {List} from "../../components/TodoList"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-5xl">To-Do</h1>
      <List />
    </div>
  );
}
