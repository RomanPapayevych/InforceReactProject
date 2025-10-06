import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentList from "../components/CommentList";
import CommentModal from "../components/CommentModal";

const ProductView = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [showCommentModal, setShowCommentModal] = useState(false);

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

    const handleAddComment = (comment) => {
        const updated = {
            ...product, 
            comments: [...product.comments, comment]
        }
        fetch(`http://localhost:5000/products/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updated),
        }).then(() => setProduct(updated));
    }

    if (!product) return <p>Loading...</p>;
  
  return(
    <div style={{ padding: "20px" }}>
        <h2>{product.name}</h2>
        <img src={product.imageUrl} alt={product.name} width="200" />
        <p>Weight: {product.weight}</p>
        <p>Count: {product.count}</p>

        <button onClick={() => setShowCommentModal(true)}>Add Comment</button>
        <CommentList comments={product.comments} />

        {showCommentModal && (
            <CommentModal
                onClose={() => setShowCommentModal(false)}
                onSave={handleAddComment}
            />
        )}
    </div>
  )
}

export default ProductView;