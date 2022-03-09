import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Modal = ({ headingOfModal,show, onClose, children }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <StyledModalOverlay onClick={handleCloseClick}>
      <StyledModal onClick={(e) => e.stopPropagation()}>
        <StyledModalHeader>
          <div className="container d-flex justify-content-center mt-3">
            <h5>{headingOfModal}</h5>
          </div>
          <button className="bg-white border-0" onClick={handleCloseClick}>
            x
          </button>
        </StyledModalHeader>
        <StyledModalBody>{children}</StyledModalBody>
      </StyledModal>
    </StyledModalOverlay>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

const StyledModalBody = styled.div`
  padding-top: 10px;
`;

const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
`;

const StyledModal = styled.div`
  background: white;
  width: 610px;
  height: 610px;
  border-radius: 15px;
  padding: 15px;
`;
const StyledModalOverlay = styled.div`
  position: fixed;
  top: 40px;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

export default Modal;
