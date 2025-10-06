import { useState } from "react";

const ProductModal = ({onClose, onSave}) => {
    const [product, setProduct] = useState({
        name: "",
        imageUrl: "",
        count: 0,
        weight: "",
        size: { width: 0, height: 0 },
        comments: [],
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prev) => ({...prev, [name]: value}))
    }

    const handleSave = () => {
        if (!product.name || !product.imageUrl || !product.weight) return;
        onSave(product);
        onClose();
    };

    return(
        <div style={{ background: "#0008", padding: "20px" }}>
            <div style={{ background: "#fff", padding: "20px" }}>
                <h2>Add Product</h2>
                <input name="name" placeholder="Name" onChange={handleChange} />
                <input name="imageUrl" placeholder="Image URL" onChange={handleChange} />
                <input name="count" placeholder="Count" onChange={handleChange} />
                <input name="weight" placeholder="Weight" onChange={handleChange} />
                <button onClick={handleSave}>Save</button>
                <button onClick={onClose}>Cancel</button>
            </div>
        </div>
    )
}

export default ProductModal;