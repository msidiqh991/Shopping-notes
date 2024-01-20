const ItemList = ({ item, onDeleteItem }) => {
    return(
        <>
            <li key={ item.id }>
                <input type="checkbox" />
                    <span style={ item.checked ? { textDecoration: 'line-through' } : {}}>
                        { item.quantity + " Pcs " } { item.name }
                    </span>
                <button onClick={() => onDeleteItem(item.id)}>&times;</button>
            </li>
        </>
    )
}

export default ItemList