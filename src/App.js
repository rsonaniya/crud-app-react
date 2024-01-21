import { useState } from "react";
import ListView from "./Components/ListView";
import TextForm from "./Components/TextForm";

function App() {
  const [items, setItems] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };
  const handleDeleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };
  const handleStartEditingItem = (id) => {
    let editingItems = [...items];
    editingItems.forEach((item) => {
      if (item.id === id) item.isEditing = true;
    });

    setItems(editingItems);
  };

  const handleFinishEditingItem = (id, editedValue) => {
    let editingItems = [...items];
    editingItems.forEach((item) => {
      if (item.id === id) {
        if (editedValue) item.text = editedValue;
        item.isEditing = false;
      }
    });

    setItems(editingItems);
  };
  return (
    <div
      className={`text-center min-vh-100 p-2 ${
        isDarkMode ? "bg-black" : "bg-white"
      }`}
    >
      <div class="form-check form-switch position-absolute top-1 end-0 mx-2">
        <input
          onClick={() => setIsDarkMode(!isDarkMode)}
          class="form-check-input"
          type="checkbox"
          role="switch"
        />
        <span className={`${isDarkMode ? "text-white" : ""}`}>
          Toggle Dark/Light Mode
        </span>
      </div>
      <TextForm onAddItem={handleAddItem} isDarkMode={isDarkMode} />
      <ListView
        items={items}
        onStartEditing={handleStartEditingItem}
        onFinishEditing={handleFinishEditingItem}
        onDeleteItem={handleDeleteItem}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}

export default App;
