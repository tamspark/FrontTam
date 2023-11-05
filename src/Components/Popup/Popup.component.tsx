import { FC, ReactNode } from "react";
type popupProps = {
  isOpen?: boolean;
  onClose?: any;
  headerContent?: ReactNode;
  bodyContent?: ReactNode;
  footerContent?: ReactNode;
};
const Popup: FC<popupProps> = ({
  isOpen,
  onClose,
  headerContent,
  bodyContent,
  footerContent,
}) => {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">{headerContent}</div>
        <div className="modal-body">{bodyContent}</div>
        <div className="modal-footer">{footerContent}</div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;
