import GroceryItem from "./GroceryItem"
import ItemList from "./ItemList"

const GroceryList = () => {
    return(
        <>
        <div className="list">
        <ul>
            { GroceryItem.map((item) => (
                <ItemList item={item} key={item.id}/>
            ))}
        </ul>
        </div>
        <div className="actions">
            <select>
                <option value="input">Sort by input order</option>
                <option value="name">Sort by item name</option>
                <option value="checked">Sort by checklist</option>
            </select>
        <button>Bersihkan Daftar</button>
        </div>
        </>
    )
}

export default GroceryList