const Form = () => {
    const quantityNum = [...Array(20)].map((_, index) => (
        <option value={ index + 1 } key={ index + 1 }>{ index  + 1 }</option>
    ))

    return(
        <form className="add-form">
            <h3>Hari ini belanja apa kita?</h3>
            <div>
                <select>{ quantityNum }</select>
            <input type="text" placeholder="nama barang..." />
            </div>
        <button>Tambah</button>
    </form>
    )
}

export default Form