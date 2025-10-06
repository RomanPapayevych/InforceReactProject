import { Link } from "react-router-dom";
import "./product-item.css"

const ProductItem = ({ product, onDelete }) => {
    return(
        <div className="product-container">
            <div className="product-content">
                <img className="product-img" src={product.imageUrl} alt={product.name} width="80" />
                <Link className="product-link" to={`/products/${product.id}`}>{product.name}</Link>
                <p>Count: {product.count}</p>
            </div>
            <button onClick={onDelete}>Delete</button>
        </div>
    );
}

export default ProductItem;