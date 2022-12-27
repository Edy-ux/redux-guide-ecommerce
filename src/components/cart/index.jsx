// Styles
import * as Styles from "./styles";
import cartSvg from '../../assets/cart.svg'
import { useSelector, useDispatch } from 'react-redux'
import CartItem from "../cart-item/";
import { addProductsCart } from "../../redux/cart/action";
import { useMemo, useState } from "react";
import { selectProductsTotalPrice } from "../../redux/cart/cart-selectors";

const Cart = ({setIsVisible, isVisible}) => {

  //get initialState from rootReducer store
  const { products } = useSelector(rootReducer => rootReducer.CartReducer)
  const productsTotalPrice = useSelector(selectProductsTotalPrice)

  const dispatch = useDispatch()

  const handleEscapeAreaClick = () => setIsVisible(false);
  
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
            <p style={{ fontWeight: 'bold', color: 'black' }}>{productsCart}</p>
            {/* <span onClick={handleEscapeAreaClick} title="Fechar">X</span> */}
          </div>
        </Styles.CartHeader>
        {products.map(product => (
          <CartItem key={product.id} {...product} />
        ))}
        <Styles.CartTotal>
          Total: R$ {productsTotalPrice}
        </Styles.CartTotal>
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
