import React from "react";

// Styles
import * as Styles from "./styles";

const CustomButton = ({ startIcon, ...rest }) => {

  return (
    <Styles.CustomButtonContainer {...rest}>
      {startIcon && <Styles.IconContainer>{startIcon}</Styles.IconContainer>}

      Adicionar ao carrinho
    </Styles.CustomButtonContainer>
  );
};


export default CustomButton;
