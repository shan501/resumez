import { ReactNode, useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center  ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={handleModalClick}
    >
      <div
        className="modal-overlay absolute inset-0 bg-black opacity-50"
        onClick={onClose} // This will close the modal when clicking on the overlay
      ></div>

      <div className="max-h-[80vh] overflow-x-auto modal-container bg-white max-w-3xl mx-auto rounded shadow-lg z-50 overflow-y-auto p-4">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
