import styled from "styled-components";

export const Container = styled.div`
  width:100%;
  margin: auto;
  align-items: center;
  padding: 10px;
  height: 60px;
  display: flex;
  justify-content: space-between;

  border-bottom: 1px  solid rgba(0, 0, 0, 0.20);

`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  color: #764abc;

  @media (max-width: 760px) {
   p{
     display: none;
   }
   
  }
  img {
    margin-right:10px;
    height: 34px;
    width: 34px;
  }
  span {
   margin-left: 5px;
   color: black;
   font-weight: 500;
  }
`;

export const Buttons = styled.div`
  /* margin-right: 5px; */
  align-content: center;
  /* align-self: center; */
  display: flex;
  align-items: center;
  justify-content: center;
  
  /* position: relative; */
  ul li {
    position: relative;
  }
  nav ul li::after {
  /* color: red; */

  content: "";
  position: absolute;
  width: 100%;
  -webkit-transform: scaleX(0);
          transform: scaleX(0);
  height: 1px;
  bottom: -6px;
  left: 0;

  background: -webkit-gradient(linear, right top, left top, from(#6a43a9), to(#764abc));
  background: linear-gradient(270deg, #6a43a9 0%, #764abc 100%);
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
  -webkit-transition: -webkit-transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  transition: -webkit-transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1), -webkit-transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
}

nav ul li:hover::after {
  -webkit-transform: scaleX(1);
          transform: scaleX(1);
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}
nav ul li:hover {
  color:  #2e0c66;
}

 nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:nth-child(1) {
      margin-right: 40px;
    }
  }

  img{
    cursor: pointer;
  }
  
`;

export const LinksContainer = styled.div`
    display:  flex;
    align-items: center;

    @media (max-width: 496px) {
     nav ul {
       display: none;
      }
    }
  ul {
    display: flex;
    justify-content: space-between;
    
    li{
     color: #764abc;
      margin-left: 1rem;
      font-weight: 500 !important;
      /* padding: 0.5rem; */
      list-style: none;
      cursor: pointer;
    }
  }

`

