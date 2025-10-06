const ConfirmModal = ({ message, onConfirm, onCancel }) => {
  return (
    <div style={{ background: "#0008", padding: "20px" }}>
      <div style={{ background: "#fff", padding: "20px" }}>
        <p>{message}</p>
        <button onClick={onConfirm}>Yes</button>
        <button onClick={onCancel}>No</button>
      </div>
    </div>
  );
};

export default ConfirmModal;