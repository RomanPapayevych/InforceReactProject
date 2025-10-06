const CommentList = ({comments, onDelete}) => {
    if (!comments || comments.length === 0) return <p>No comments yet.</p>;

    return(
        <div>
            <h3>Comments:</h3>
            {comments.map(comment => (
                <div key={comment.id} style={{ borderBottom: "1px solid #ccc", marginBottom: "5px" }}>
                    <p>{comment.description}</p>
                    <p>{comment.date}</p>
                    <button 
                        onClick={() => onDelete(comment.id)} 
                        style={{ background: "red", color: "#fff", border: "none", padding: "5px 10px", cursor: "pointer" }}
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    )
}

export default CommentList;