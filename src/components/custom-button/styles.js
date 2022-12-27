import styled from "styled-components";

export const CustomButtonContainer = styled.button`
  width: 100%;
  background-color: #222222;
  color: #eeeeee;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  border: none;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 15px;
  padding-left: 15px;
  font-weight: 600;
  transition: all 0.5s ease;

    visibility: visible;
    opacity: 0;
    transition: all 0.5s ease;
    margin: 20px;
    font-family: "Poppins" !important;

   
    &:hover {
      opacity: 1;
      /* visibility: v; */
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: color;
    cursor: pointer;
    button {
      visibility: visible;
      opacity: 1;
    }
  }
`;

export const IconContainer = styled.div`
  margin-right: 8px;
  height: 100%;
  display: flex;
  align-items: center;
`;
