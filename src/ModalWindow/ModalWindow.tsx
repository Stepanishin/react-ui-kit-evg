import React, { useEffect, useState } from "react";
import "./styles.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  isCloseBtn?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  isCloseBtn,
}) => {
  const [modalState, setModalState] = useState<boolean>(isOpen);

  useEffect(() => {
    setModalState(isOpen);
  }, [isOpen]);

  const closeModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <>
      {modalState && (
        <div className="modal">
          <div className="modal-overlay" onClick={closeModal}></div>
          <div className="modal-content">
            {isCloseBtn && (
              <div className="modal-header">
                <button className="modal-close" onClick={closeModal}>
                  X
                </button>
              </div>
            )}
            <div className="modal-body">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};
