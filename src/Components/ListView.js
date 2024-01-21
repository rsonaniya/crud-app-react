import { useState } from "react";

function ListView({
  items,
  onStartEditing,
  onFinishEditing,
  onDeleteItem,
  isDarkMode,
}) {
  const [editValue, setEditValue] = useState(null);
  const handleDelete = (id) => {
    onDeleteItem(id);
  };
  const handleStartEditing = (id) => {
    onStartEditing(id);
  };
  const handleSubmitEditing = (id) => {
    onFinishEditing(id, editValue);
    setEditValue(null);
  };
  return (
    <div className="container mt-5">
      {items.map((item) => (
        <div
          key={item.id}
          className={`shadow p-3 mb-3 rounded d-flex justify-content-between ${
            isDarkMode ? "bg-secondary text-white" : ""
          }`}
        >
          {item.isEditing ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmitEditing(item.id);
              }}
              className={`form-control d-flex justify-content-between ${
                isDarkMode ? "bg-secondary text-white" : ""
              }`}
            >
              <input
                type="text"
                className={`form-control w-75 ${
                  isDarkMode ? "bg-secondary text-white" : ""
                }`}
                value={
                  editValue !== null
                    ? editValue
                    : items.filter((i) => i.id === item.id)[0].text
                }
                onChange={(e) => setEditValue(e.target.value)}
              />
              <button type="submit" className="btn btn-success mx-2">
                ✓
              </button>
            </form>
          ) : (
            <>
              <span>{items.indexOf(item) + 1}.</span>
              <span>{item.text}</span>
              <div>
                <button
                  onClick={() => handleStartEditing(item.id)}
                  className="btn btn-warning mx-1"
                >
                  <i className="bi bi-pencil"></i>
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="btn btn-danger"
                >
                  <i className="bi bi-trash"></i>
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default ListView;
