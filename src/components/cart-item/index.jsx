import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";

import { useDispatch } from "react-redux";
//components
import { Trash } from './trash'

// Styles
import * as Styles from "./styles";
import { addQuantityCart } from "../../redux/cart/action"; 
import { removeProductFromCart } from "../../redux/cart/action"; 


const CartItem = ({ imageUrl, name, quantity, totalPrice, price, id }) => {

  const dispatch = useDispatch()
  const handleRemoveClick = () => {
    dispatch(removeProductFromCart({id}))
  };

  const handleIncreaseClick = () => {

  };

  const handleDecreaseClick = () => {
    dispatch(addQuantityCart({id}))
  };

 
  return (

    <Styles.CartItemContainer>
      <Styles.CartItemImage imageUrl={imageUrl} />
      <Styles.CartItemInfo>
        <p>{name}</p>
        <p>R${totalPrice ?? price}</p>
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
      <Trash size={20} onClick={handleRemoveClick} />
    </Styles.CartItemContainer>
  )

};

export default CartItem;
