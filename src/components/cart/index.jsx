// Styles
import * as Styles from "./styles";
import cartSvg from '../../assets/cart.svg'

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  return (

    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartHeader>
          <Styles.CartTitle >Seu carrinho de compras</Styles.CartTitle>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span onClick={handleEscapeAreaClick} title="Fechar">X</span>
            <img src={cartSvg} alt="cart" title="carrinho" />
            <p style={{ fontWeight: 'bold', color: 'black' }}>{'5'}</p>
          </div>
        </Styles.CartHeader>
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
