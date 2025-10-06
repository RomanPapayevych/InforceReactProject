import './comment-list.css'
const CommentList = ({comments, onDelete}) => {
    if (!comments || comments.length === 0) return <p>No comments yet.</p>;

    return(
        <div className="comment-container">
            <h3>Comments:</h3>
            {comments.map(comment => (
                <div className='comment-content' key={comment.id} style={{ borderBottom: "1px solid #ccc", marginBottom: "5px" }}>
                    <p>{comment.description}</p>
                    <p>{comment.date}</p>
                    <button 
                        onClick={() => onDelete(comment.id)} 
                        className='btn-delete'
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    )
}

export default CommentList;