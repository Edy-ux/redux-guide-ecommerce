import data from "../../data/products";

import { useSelector, useDispatch } from 'react-redux'
import { addProductsCart } from "../../redux/cart/action";

// Components
import ProductItem from "../product-item/index";

// Styles
import * as Styles from "./styles";

const Products = () => {

  const { products } = useSelector(rootReducer => rootReducer.CartReducer)
  const dispatch = useDispatch()

  // console.log(products)
  const handleProductCart = ({id, price, name, imageUrl}) => {
    // console.log({id, price, name, imageUrl});=
    dispatch(addProductsCart({id, price, name, imageUrl}))
  }

  return (
    <Styles.Container>
      {data.map((product) => (
        <ProductItem key={product.id} product={product} handleProductCart={() => handleProductCart({...product})}/>
      ))}
    </Styles.Container>
  );
};

export default Products;
