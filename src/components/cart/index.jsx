// Styles
import * as Styles from "./styles";
import cartSvg from '../../assets/cart.svg'
import { useSelector, useDispatch } from 'react-redux'
import { addProductsCart } from "../../redux/cart/action";

const Cart = ({ isVisible, setIsVisible }) => {

  const handleEscapeAreaClick = () => setIsVisible(false);

  //get initialState from rootReducer store

  const { products } = useSelector(rootReducer => rootReducer.CartReducer)
  const dispatch = useDispatch()

 

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
