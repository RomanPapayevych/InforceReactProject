import { useState } from "react";

const CommentModal = ({onClose, onSave}) => {
    const [text, setText] = useState("");

    const handleSave = () => {
        const comment = {
            id: Date.now(),
            description: text,
            date: new Date().toLocaleString(),
        };
        onSave(comment);
        onClose();
    }

    return(
        <div style={{ background: "#0008", padding: "20px" }}>
            <div style={{ background: "#fff", padding: "20px" }}>
                <h3>Add Comment</h3>
                <textarea 
                    value={text} 
                    onChange={(e) => setText(e.target.value)} 
                    placeholder="Enter comment..."
                />
                <button onClick={handleSave}>Save</button>
                <button onClick={onClose}>Cancel</button>
            </div>
        </div>
    )
}

export default CommentModal;