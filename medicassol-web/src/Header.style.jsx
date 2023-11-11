import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 2px solid #333;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f8f8f8;
`;

export const Buttons = styled.div`
  border: 2px solid #333;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 120px;
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, transform 0.3s, box-shadow 0.3s;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Button-like box shadow on hover */
  }

  &:active {
    transform: scale(0.95); /* Press animation on click */
  }
`;

export const ButtonContent = styled.div`
  color: #333;
  font-weight: bold;
`;
