import { useEffect, useState } from "react";
import ProductItem from '../components/ProductItem'
import ProductModal from "../components/ProductModal";
import ConfirmModal from "../components/ConfirmModal";

const ProductListView = () => {
    const [products, setProducts] = useState([]);
    const [sortType, setSortType] = useState("name");
    const [showAddModal, setShowAddModal] = useState(false);
    const [productToDelete, setProductToDelete] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    const handleAddProduct = (newProduct) => {
        const productToSave = { ...newProduct, comments: [] };

        fetch("http://localhost:5000/products", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(productToSave),
        })
        .then((res) => res.json())
        .then(savedProduct => setProducts(prev => [...prev, savedProduct]))
    }

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/products/${id}`, {
            method: "DELETE",
        })
        .then(() => setProducts((prev) => prev.filter((product) => product.id !== id)))
    }

    const sortedProducts = [...products].sort((a, b) => {
        const nameA = a.name || "";
        const nameB = b.name || "";
        if (sortType === "name") return nameA.localeCompare(nameB);
        if (sortType === "count") return (b.count || 0) - (a.count || 0);
        return 0;
    });

    return(
        <div style={{ padding: "20px" }}>
            <h1>Products List View</h1>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button onClick={() => setShowAddModal(true)}>Add Product</button>
                <select onChange={(e) => setSortType(e.target.value)} value={sortType}>
                    <option value="name">Sort by Name</option>
                    <option value="count">Sort by Count</option>
                </select>
            </div>

            {sortedProducts.map((product) => (
                <ProductItem
                    key={product.id}
                    product={product}
                    onDelete={() => setProductToDelete(product)}
                />
            ))}

            {showAddModal && (
                <ProductModal 
                    onClose={() => setShowAddModal(false)} 
                    onSave={handleAddProduct}
                />
            )}

            {productToDelete && (
                <ConfirmModal
                    message={`Delete ${productToDelete.name}?`}
                    onConfirm={() => {
                        handleDelete(productToDelete.id);
                        setProductToDelete(null);
                    }}
                    onCancel={() => setProductToDelete(null)}
                />
            )}
        </div>
    )
}

export default ProductListView;