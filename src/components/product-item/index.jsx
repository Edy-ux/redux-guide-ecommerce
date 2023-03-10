import { BsCartPlus } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addProductCart } from "../../redux/cart/action";

// Components
import CustomButton from "../custom-button/index";

// Styles
import * as Styles from "./styles";

// Utilities

const ProductItem = ({ product }) => {

  
  const formatCurrency  = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
   currency: "BRL"
})
  const dispatch = useDispatch()

  const handleProductClick = () => {
    dispatch(addProductCart(product))
  }
  return (
    <Styles.ProductContainer>
      <Styles.ProductImage imageUrl={product.imageUrl}>
        <CustomButton startIcon={<BsCartPlus />} onClick={handleProductClick} />
      </Styles.ProductImage>
      <Styles.ProductInfo>
        <p>{product.name}</p>
        <p><span>R$</span> {formatCurrency.format(product.price)}</p>
      </Styles.ProductInfo>
    </Styles.ProductContainer>
  );
};

export default ProductItem;
