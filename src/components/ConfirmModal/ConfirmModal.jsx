import './confirm-modal.css'

const ConfirmModal = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="confirm-content">
      <div className="confirm-content">
        <p>{message}</p>
        <button className='confirm-button' onClick={onConfirm}>Yes</button>
        <button className='confirm-button' onClick={onCancel}>No</button>
      </div>
    </div>
  );
};

export default ConfirmModal;