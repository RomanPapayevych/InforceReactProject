import { useState } from "react";

const ProductModal = ({ product = {}, onClose, onSave}) => {
     const [formData, setFormData] = useState({
        name: product.name || "",
        imageUrl: product.imageUrl || "",
        count: product.count || 0,
        weight: product.weight || "",
        size: product.size || { width: 0, height: 0 },
        comments: product.comments || [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({...prev, [name]: value}))
    }

    const handleSave = () => {
        if (!formData.name || !formData.imageUrl || !formData.weight) return;
        onSave(formData);
        onClose();
    };

    return(
        <div style={{ background: "#0008", padding: "20px" }}>
            <div style={{ background: "#fff", padding: "20px" }}>
                <h2>{product.id ? "Edit Product" : "Add Product"}</h2>
                <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
                <input name="imageUrl" placeholder="Image URL" value={formData.imageUrl} onChange={handleChange} />
                <input name="count" placeholder="Count" value={formData.count} onChange={handleChange} />
                <input name="weight" placeholder="Weight" value={formData.weight} onChange={handleChange} />
                <button onClick={handleSave}>Save</button>
                <button onClick={onClose}>Cancel</button>
            </div>
        </div>
    )
}

export default ProductModal;