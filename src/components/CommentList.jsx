const CommentList = ({comments}) => {
    return(
        <div>
            <h3>Comments:</h3>
            {comments.map((comment) => {
                <div key={comment.id} style={{ borderBottom: "1px solid #ccc", marginBottom: "5px" }}>
                    <p>{comment.description}</p>
                    <p>{comment.date}</p>
                </div>
            })}
        </div>
    )
}

export default CommentList;