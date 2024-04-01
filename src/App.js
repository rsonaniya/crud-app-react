import { useState } from "react";
import ListView from "./Components/ListView";
import TextForm from "./Components/TextForm";

function App() {
  const [items, setItems] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [editValue, setEditValue] = useState(null);

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  const handleStartEditingItem = (id) => {
    let editingItems = [...items];
    editingItems.forEach((item) => {
      if (item.id === id) item.isEditing = true;
    });

    setItems(editingItems);
  };

  const handleEditChange = (value, item) => {
    const newItems = items.map((i) => {
      if (item.id === i.id) {
        i.text = value;
        return i;
      } else {
        return i;
      }
    });
    setItems(newItems);
  };

  const handleSubmitEditingItem = (id) => {
const newItems = items.map(i=>{
  if(i.id===id){
    i.isEditing = false;
    return i
  }else{
    return i
  }
})
setItems(newItems)    
  };

  const handleDeleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
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
        onFinishEditing={handleSubmitEditingItem}
        onEditChange={handleEditChange}
        onDeleteItem={handleDeleteItem}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}

export default App;

