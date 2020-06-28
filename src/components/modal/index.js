import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "70%",
    height: "70%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const FormModal = ({ modalIsOpen, closeModal }) => {
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        style={customStyles}
        contentLabel="Example Modal"
      ></Modal>
    </>
  );
};

export default FormModal;
