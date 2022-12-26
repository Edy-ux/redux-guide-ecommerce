// Styles
import * as Styles from "./styles";
import cartSvg from '../../assets/cart.svg'
import { useSelector, useDispatch } from 'react-redux'
import CartItem from "../cart-item/";
import { addProductsCart } from "../../redux/cart/action";
import { useMemo } from "react";

const Cart = ({ isVisible, setIsVisible }) => {

  const handleEscapeAreaClick = () => setIsVisible(false);

  //get initialState from rootReducer store
  const { products } = useSelector(rootReducer => rootReducer.CartReducer)
  const dispatch = useDispatch()

  const productsCart = useMemo(() =>
    products.reduce((acc, curr) => acc + curr.quantity, 0),
    [products])
    
  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartHeader>
          <Styles.CartTitle >Seu carrinho de compras</Styles.CartTitle>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={cartSvg} alt="cart" title="carrinho" />
            <p style={{ fontWeight: 'bold', color: 'black' }}>{productsCart }</p>
            {/* <span onClick={handleEscapeAreaClick} title="Fechar">X</span> */}
          </div>
        </Styles.CartHeader>
        {products.map(product => (
          <CartItem key={product.id} {...product} />
        ))}
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
