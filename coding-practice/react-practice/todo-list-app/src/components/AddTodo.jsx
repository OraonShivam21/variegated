import { useState } from "react";

const AddTodo = ({ handleAddTodo }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const onClick = () => {
    handleAddTodo(text);
    setText("");
  };

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Add Todo"
      />
      <button onClick={onClick}>ADD</button>
    </>
  );
};

export default AddTodo;
