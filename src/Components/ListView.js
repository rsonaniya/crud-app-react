function ListView({
  items,
  onStartEditing,
  onFinishEditing,
  onEditChange,
  onDeleteItem,
  isDarkMode,
  onError,
}) {
  const handleDelete = (id) => {
    onDeleteItem(id);
  };
  const handleStartEditing = (id) => {
    onStartEditing(id);
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
                item.text ? onFinishEditing(item.id) : onError();
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
                value={item.text}
                onChange={(e) => onEditChange(e.target.value, item)}
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
