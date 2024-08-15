import React, { useEffect, useState } from "react";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import EditTodo from "./EditTodo";

const ListTodo = () => {
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);

  // Fetch todos from local storage when the component mounts
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  // Handle delete action
  const handleDelete = (indexToDelete) => {
    const updatedTodos = todos.filter((_, index) => index !== indexToDelete);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    window.location.reload();
  };

  // Handle edit action
  const handleEdit = (indexToEdit) => {
    setCurrentTodo({
      index: indexToEdit,
      ...todos[indexToEdit],
    });
    setIsEditing(true);
  };

  // Handle save and close modal
  const handleSave = (updatedTodo) => {
    const updatedTodos = todos.map((todo, index) =>
      index === currentTodo.index ? updatedTodo : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setIsEditing(false);
  };

  return (
    <div className="overflow-x-auto bg-black text-white ml-10 mr-10 md:ml-40 md:mr-40 mb-40">
      <table className="table text-center">
        {/* head */}
        <thead>
          <tr className="text-xl text-white">
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.description}</td>
              <td>
                <button
                  onClick={() => handleEdit(index)}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  <MdModeEditOutline />
                </button>
              </td>
              <td>
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  <MdDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isEditing && (
        <EditTodo
          todo={currentTodo}
          onSave={handleSave}
          onClose={() => setIsEditing(false)}
        />
      )}
    </div>
  );
};

export default ListTodo;


