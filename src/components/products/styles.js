import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  padding: 40px;
  grid-row-gap: 20px;

  width: 100%;
  @media (max-width: 1160px) {

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* grid-template-rows: repeat(3, 1fr); */

  }

@media (max-width: 996px) {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    /* grid-template-rows: repeat(3, 1fr); */
    
  }

  @media (max-width: 590px) {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;

    
  }
`;
