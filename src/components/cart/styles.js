import styled from "styled-components";

export const CartContainer = styled.div`
  z-index: 0;
  position: fixed;
  height: 100vh;
  width: 100vw;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: flex-end;
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transition: all 0.3s ease;
  

  p {
    color: #222222;
  }
`;

export const CartEscapeArea = styled.div`
  width: 100%;
`;

export const CartContent = styled.div`
  height: 100%;
  min-width: 500px;
  z-index: 200;
  background-color: white;
  padding: 15px;
  overflow-y: scroll;

  

  @media (max-width: 768px) {
    min-width: 85%;
  }
`;

export const CartHeader = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 height: 50px;
 div:not(:first-child){
  cursor: pointer;
 }

 div {
  position: relative;
 }
 
 div span {
  position: absolute;
  top: 13px;
  right: 10px;
  margin-right: 10px;
  color: white;
 }
  
  `
export const CartTitle = styled.p`
  
  font-size: 1.325rem;
  font-weight: 400;
`;
export const CartTotal = styled.p`
  font-weight: 600;
  font-size: 1.125rem;
  margin-bottom: 15px;
`;
