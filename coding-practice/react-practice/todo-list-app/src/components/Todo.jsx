import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Learn HTML",
      status: false,
    },
    {
      id: 2,
      title: "Learn CSS",
      status: false,
    },
    {
      id: 3,
      title: "Learn Javascript",
      status: false,
    },
    {
      id: 4,
      title: "Learn React",
      status: false,
    },
  ]);

  const handleAddTodo = (text) => {
    const newTodo = {
      id: new Date().toDateString() + text,
      title: text,
      status: false,
    };
    setTodos([...todos, newTodo]);
  };

  const handleToggle = (id) => {
    setTodos(() => {
      return todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            status: !todo.status,
          };
        } else {
          return todo;
        }
      });
    });
  };

  const handleDelete = (id) => {
    setTodos(() => {
      return todos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <>
      <AddTodo handleAddTodo={handleAddTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            status={todo.status}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </>
  );
};

export default Todo;
