import { useState } from "react";

function TextForm({ onAddItem, isDarkMode }) {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { id: Date.now(), text };
    onAddItem(newItem);
    setText("");
  };
  return (
    <form onSubmit={handleSubmit} className="container">
      <div
        className={`input-group mt-5 ${
          isDarkMode ? "bg-secondary text-white" : ""
        }`}
      >
        <span
          className={`input-group-text ${
            isDarkMode ? "bg-secondary text-white" : ""
          }`}
        >
          What do you need?
        </span>
        <input
          type="text"
          className={`form-control ${
            isDarkMode ? "bg-secondary text-white" : ""
          }`}
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-success">
          <i className="bi bi-plus-square"></i>
        </button>
      </div>
    </form>
  );
}

export default TextForm;
