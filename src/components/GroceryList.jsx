import ItemList from "./ItemList"

const GroceryList = ({ items, onDeleteItem, onToggleItem, onClearItems }) => {
    return(
        <>
        <div className="list">
        <ul>
            { items.map((item) => (
                <ItemList item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem}/>
            ))}
        </ul>
        </div>
        <div className="actions">
            <select>
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