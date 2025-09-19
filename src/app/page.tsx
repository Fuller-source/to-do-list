import {List} from "../../components/TodoList"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-white text-5xl font-display p-5 bg-onyx rounded-2xl">To-Do</h1>
      <List />
    </div>
  );
}
