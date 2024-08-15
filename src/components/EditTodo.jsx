import React, { useState } from "react";
import ReactDom from "react-dom";

const EditTodo = ({ todo, onSave, onClose }) => {
  const [description, setDescription] = useState(todo.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...todo, description });
    onClose();
  };

  return ReactDom.createPortal(
// So i actually used the react portal in editing a todo. The modal should displays dynamic content passed as props.

    <div
      className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75"
      onClick={onClose}
    >
      <div
        className="bg-white text-black p-6 rounded w-96"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl mb-4">Edit Todo</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium">
              Description
            </label>
            <input
              id="description"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border border-gray-300 p-2 rounded w-full"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default EditTodo;
