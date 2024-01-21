import Header from "./components/Header"
import Form from "./components/Form"
import Footer from "./components/Footer"
import GroceryList from "./components/GroceryList"
import GroceryItem from "./components/GroceryItem"
import { useState } from "react"

function App() {
  const [items, setItems] = useState(GroceryItem)

  function handleAddItem(item) {
    setItems([...items, item])
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id))
  }

  function handleToggleItem(id) {
    setItems((items) => items.map(
      (item) => (item.id === id ? 
        { ...item, checked: !item.checked } : item
      )))
  }

  function handleClearItems() {
    setItems([])
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItem={ handleAddItem } />
      <GroceryList 
        items={items}
        onDeleteItem={ handleDeleteItem } 
        onToggleItem={ handleToggleItem } 
        onClearItems={ handleClearItems } />
      <Footer />
    </div>
  )
}

export default App
