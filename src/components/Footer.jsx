const Footer = ({ items }) => {
    const totalItems = items.length
    const checkedItems = items.filter((item) => item.checked).length
    const percentage = Math.round((checkedItems / totalItems) * 100)

    return <footer className="stats">
        Ada { totalItems } barang di daftar belanjaan, { checkedItems } barang sudah dibeli ({ percentage }%)
        </footer>
}

export default Footer