import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";

import { useDispatch } from "react-redux";
//components
import { Trash } from './trash'

//actions 
import { decreaseQuantityProductCart } from "../../redux/cart/action";
import { removeProductFromCart, increaseQuantityProductCart } from "../../redux/cart/action";

// Styles
import * as Styles from "./styles";



const CartItem = ({ imageUrl, name, quantity, totalPrice, price, id }) => {

  //formatCurrency
const formatCurrency  = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
   currency: "BRL"
})
  const total = formatCurrency.format(totalPrice)
  const priceItem = formatCurrency.format(price)
  const dispatch = useDispatch()

  const handleRemoveClick = () => {
    dispatch(removeProductFromCart({ id }))
  };

  const handleIncreaseClick = () => {
    dispatch(increaseQuantityProductCart({ id }))
  };

  const handleDecreaseClick = () => {
    dispatch(decreaseQuantityProductCart({ id }))
  };
  return (

    <Styles.CartItemContainer>
      <Styles.CartItemImage imageUrl={imageUrl} />
      <Styles.CartItemInfo>
        <p>{name}</p>
        <p>{priceItem}</p>
        <Styles.CartItemQuantity>
          <AiOutlineMinus
            size={20}
            onClick={handleDecreaseClick}
            aria-label={`Decrease quantity of ${name}`}
          />
          <p>{quantity}</p>
          <AiOutlinePlus
            size={20}
            onClick={handleIncreaseClick}
            aria-label={`Increase quantity of ${name}`}
          />
        </Styles.CartItemQuantity>
      </Styles.CartItemInfo>
      <AiOutlineClose style={{color: 'red', marginBottom: '5px'}} onClick={handleRemoveClick} />
    </Styles.CartItemContainer>
  )

};

export default CartItem;
