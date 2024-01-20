const ItemList = ({ item }) => {
    return(
        <>
            <li key={ item.id }>
                <input type="checkbox" />
                    <span style={ item.checked ? { textDecoration: 'line-through' } : {}}>
                        { item.quantity + " Pcs " } { item.name }
                    </span>
                <button>&times;</button>
            </li>
        </>
    )
}

export default ItemList