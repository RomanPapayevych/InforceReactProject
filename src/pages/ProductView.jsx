import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentList from "../components/CommentList";

const ProductView = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/products`)
            .then((res) => res.json())
            // .then((data) => setProduct(data));
            .then(data => {
                console.log(data);
                const foundProduct = data.find(p => p.id.toString() === id);
                setProduct(foundProduct);
            });
    }, [id]);

  if (!product) return <p>Loading...</p>;
  
  return(
    <div style={{ padding: "20px" }}>
        <h2>{product.name}</h2>
        <img src={product.imageUrl} alt={product.name} width="200" />
        <p>Weight: {product.weight}</p>
        <p>Count: {product.count}</p>

        <CommentList comments={product.comments} />
    </div>
  )
}

export default ProductView;