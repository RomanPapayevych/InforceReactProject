import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentList from "../components/CommentList";
import CommentModal from "../components/CommentModal";

const ProductView = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [comments, setComments] = useState([]);
    const [showCommentModal, setShowCommentModal] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data));

         fetch(`http://localhost:5000/comments?productId=${id}`)
            .then(res => res.json())
            .then(data => setComments(data));

    }, [id]);

    const handleAddComment = (comment) => {
         const newComment = {
            id: Date.now().toString(),
            productId: id.toString(),   
            description: comment.description,
            date: new Date().toLocaleString()
        };

        fetch("http://localhost:5000/comments", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newComment)
        })
        .then(res => res.json())
        .then(savedComment => {
            setComments(prev => [...prev, savedComment]);

            const updatedProduct = {
                ...product,
                comments: [...product.comments, savedComment.id] 
            };

            fetch(`http://localhost:5000/products/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedProduct)
            }).then(() => setProduct(updatedProduct));
        });
    }

    const handleDeleteComment = (commentId) => {
        fetch(`http://localhost:5000/comments/${commentId}`, { method: "DELETE" })
            .then(() => {
                setComments(prev => prev.filter(c => c.id !== commentId));
                const updatedProduct = { ...product, comments: product.comments.filter(id => id !== commentId) };
                fetch(`http://localhost:5000/products/${id}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(updatedProduct)
                }).then(() => setProduct(updatedProduct));
            });
    };

    if (!product) return <p>Loading...</p>;
  
  return(
    <div style={{ padding: "20px" }}>
        <h2>{product.name}</h2>
        <img src={product.imageUrl} alt={product.name} width="200" />
        <p>Weight: {product.weight}</p>
        <p>Count: {product.count}</p>

        <button onClick={() => setShowCommentModal(true)}>Add Comment</button>
        <CommentList comments={comments} onDelete={handleDeleteComment}/>

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