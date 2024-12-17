import { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import TodoList from "./components/TodoList";

export interface Todo {
  id: string;
  task: string;
  completed: boolean;
}

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [currentEditTask, setCurrentEditTask] = useState<Todo | null>(null);

  const addTodo = () => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      task: inputValue,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setInputValue("");
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const startEditTodo = (todo: Todo) => {
    setEditMode(true);
    setCurrentEditTask(todo);
    setInputValue(todo.task);
  };

  const updateTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task: inputValue } : todo
      )
    );
    setEditMode(false);
    setInputValue("");
    setCurrentEditTask(null);
  };

  return (
    <main className="container">
      <h1>Todo App</h1>
      <div className="todo-toolbox">
        <Input
          type="text"
          className="input"
          placeholder="enter your todo"
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        <Button
          className="add-todo-button"
          label={editMode ? "Update Todo" : "Add Todo"}
          onClick={
            editMode && currentEditTask
              ? () => updateTodo(currentEditTask.id)
              : addTodo
          }
        />
      </div>

      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        startEditTodo={startEditTodo}
      />

      {/* <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <Checkbox />
            {todo}
            <Button label="Edit" onClick={() => editTodo(index)} />
            <Button
              className="btn-delete"
              label="Delete"
              onClick={() => deleteTodo(index)}
            />
          </li>
        ))}
      </ul> */}
    </main>
  );
}

export default App;
