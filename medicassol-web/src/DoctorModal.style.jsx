// Page1.style.js

import styled from "styled-components";

// ... existing styles ...

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  z-index: 102;

  .modal-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }

  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    box-sizing: border-box;
  }

  button {
    padding: 10px;
    margin-right: 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:last-child {
    background-color: #ccc;
  }
`;

// ... existing styles ...
