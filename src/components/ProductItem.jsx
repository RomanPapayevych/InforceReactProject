import { Link } from "react-router-dom";

const ProductItem = ({ product, onDelete }) => {
    return(
        <div style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px 0",
            display: "flex",
            justifyContent: "space-between",
        }}>
            <div>
                <img src={product.imageUrl} alt={product.name} width="80" />
                <Link to={`/products/${product.id}`}>{product.name}</Link>
                <p>Count: {product.count}</p>
            </div>
            <button onClick={onDelete}>Delete</button>
        </div>
    );
}

export default ProductItem;