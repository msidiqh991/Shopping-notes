const Footer = ({ items }) => {
    const totalItems = items.length
    const checkedItems = items.filter((item) => item.checked).length
    const percentage = Math.round((checkedItems / totalItems) * 100)

    if(items.length === 0)
        return <footer className="stats">The shopping list is still empty</footer>

    return <footer className="stats">
        There are { totalItems } items on the shopping list, { checkedItems } items have been purchased ({ percentage }%)
        </footer>
}

export default Footer