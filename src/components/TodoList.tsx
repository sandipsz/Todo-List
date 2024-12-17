import Checkbox from "./Checkbox";
import { Todo } from "../App";
import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { motion } from "motion/react";

interface TodoListProps {
  todos: Todo[];
  deleteTodo: (id: string) => void;
  startEditTodo: (todo: Todo) => void;
}

const TodoList = ({ todos, deleteTodo, startEditTodo }: TodoListProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => setIsChecked(!isChecked);
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 3 } }}
      className="todo-list"
    >
      {todos.length > 0 &&
        todos.map((todo) => (
          <>
            <div key={todo.id} className="todo-item">
              <Checkbox
                isChecked={isChecked}
                handleCheckboxChange={handleCheckboxChange}
              />
              {isChecked ? <del>{todo.task}</del> : <span>{todo.task}</span>}
              <div className="todo-item-btn-box">
                <FiEdit width={34} onClick={() => startEditTodo(todo)} />
                <MdDeleteOutline
                  size={24}
                  onClick={() => deleteTodo(todo.id)}
                />
              </div>
            </div>
          </>
        ))}
    </motion.div>
  );
};

export default TodoList;
