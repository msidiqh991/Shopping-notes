import { useState } from "react"
import { v4 as uuid } from "uuid";

const Form = ({ onAddItem }) => {
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState(1)

    function handleSubmit(event) {
        event.preventDefault()

        if(!name) return alert('Data harus diisi ...')

        const newItem = { id: uuid(), name, quantity, checked: false }
        onAddItem(newItem)

        setName('')
        setQuantity(1)
    }

    const quantityNum = [...Array(20)].map((_, index) => (
        <option value={ index + 1 } key={ index + 1 }>{ index  + 1 }</option>
    ))

    return(
        <form className="add-form" onSubmit={ handleSubmit }>
            <h3>Hari ini belanja apa kita?</h3>
            <div>
                <select value={ quantity } onChange={(event) => setQuantity(Number(event.target.value))}>
                    { quantityNum }
                </select>
                <input type="text" placeholder="Item name ..." 
                    value={ name } 
                    onChange={(event) => setName(event.target.value) } 
                />
            </div>
        <button>Tambah</button>
    </form>
    )
}

export default Form