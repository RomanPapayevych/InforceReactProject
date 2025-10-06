import { useEffect, useState } from "react";
import ProductItem from '../components/ProductItem'

const ProductListView = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    const sortedProducts = [...products].sort((a, b) => {
        if (sortType === "name") return a.name.localeCompare(b.name);
        if (sortType === "count") return b.count - a.count;
        return 0;
    });

    return(
        <div>
            <h1>Products List View</h1>
            {sortedProducts.map((p) => (
                <ProductItem
                    key={p.id}
                    product={p}
                />
            ))}
        </div>
    )
}

export default ProductListView;