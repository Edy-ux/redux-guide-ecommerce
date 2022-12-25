import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  
`;

export const ProductInfo = styled.div`

  display: flex;
  justify-content: space-between;
  margin-top: 5px;

  p {
    font-size: 1rem;
    font-weight: 500;
    font-family: "Poppins" !important;
  }
`;


export const ProductImage = styled.div`
  background-image: ${(props) => `url('${props.imageUrl}')`};
  height:380px;
  width: 300px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: flex-end;
  transition: all 0.3s ease;
  background-color: transparent;
  background-blend-mode: color;

  @media (max-width: 780px) {
    height: 320px;
    width:  260px;
    justify-content: center
    
    
  }
 

  button {
    visibility: hidden;
    opacity: 0;
    transition: all 0.5s ease;
    margin: 20px;
    font-family: "Poppins" !important;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: color;
    cursor: pointer;

    button {
      visibility: visible;
      opacity: 1;
    }
  }

 
`;
