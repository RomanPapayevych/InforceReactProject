import "./universal-modal.css";

const UniversalModal = ({children}) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default UniversalModal;
