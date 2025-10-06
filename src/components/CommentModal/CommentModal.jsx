import { useState } from "react";
import './comment-modal.css'

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
        <div>
            <div className="product-content">
                <h2>Add Comment</h2>
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