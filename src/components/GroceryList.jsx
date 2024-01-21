import { useState } from "react"
import ItemList from "./ItemList"

const GroceryList = ({ items, onDeleteItem, onToggleItem, onClearItems }) => {
    const [sortBy, setSortBy] = useState('input')

    let sortedItems

    if(sortBy === 'input') {
        sortedItems = items
    } 

    if(sortBy === 'name') {
        sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name))
    }

    if(sortBy === 'checked') {
        sortedItems = items.slice().sort((a,b) => a.checked - b.checked)
    }

    switch(sortBy) {
        case 'name':
            sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name))
            break
            
        case 'checked':
            sortedItems = items.slice().sort((a,b) => a.checked - b.checked)
            break

        default: 
            sortedItems = items
            break
    }

    return(
        <>
        <div className="list">
        <ul>
            { sortedItems.map((item) => (
                <ItemList item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem}/>
            ))}
        </ul>
        </div>
        <div className="actions">
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="input">Sort by input order</option>
                <option value="name">Sort by item name</option>
                <option value="checked">Sort by checklist</option>
            </select>
        <button onClick={onClearItems}>Clear List</button>
        </div>
        </>
    )
}

export default GroceryList