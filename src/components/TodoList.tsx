import Checkbox from "./Checkbox";
import { Todo } from "../App";
import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

interface TodoListProps {
  todos: Todo[];
  deleteTodo: (id: string) => void;
  startEditTodo: (todo: Todo) => void;
}

const TodoList = ({ todos, deleteTodo, startEditTodo }: TodoListProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => setIsChecked(!isChecked);
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <>
          <div key={todo.id} className="todo-item">
            <Checkbox
              isChecked={isChecked}
              handleCheckboxChange={handleCheckboxChange}
            />
            {isChecked ? <del>{todo.task}</del> : <span>{todo.task}</span>}
            <div className="todo-item-btn-box">
              <FiEdit width={34} onClick={() => startEditTodo(todo)} />
              <MdDeleteOutline size={24} onClick={() => deleteTodo(todo.id)} />
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default TodoList;
