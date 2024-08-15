import React, { useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    try {
      const body = { description };

      // Save to localStorage
      const todos = JSON.parse(localStorage.getItem("todos")) || [];
      todos.push(body);
      localStorage.setItem("todos", JSON.stringify(todos));

      setDescription(""); // Clear input after submitting

      // Reload the page
      window.location.reload();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="font-mont">
      <h1 className="text-center text-3xl md:text-6xl font-bold my-20">
        Get Started
      </h1>
      <div className="whitespace-nowrap">
        <input
          type="text"
          placeholder="add todo here..."
          className="pl-4 ml-10 md:w-3/6 md:ml-72 py-4 text-white border-2 bg-black"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          onClick={onSubmit}
          className="bg-green-500 py-4 border-6 border-black px-7 md:px-14 mb-14 md:mb-20 text-white font-semibold"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default InputTodo;