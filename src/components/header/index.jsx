//libs

import { useMemo, useState } from "react";

//redux
import { useSelector, useDispatch } from 'react-redux'
// import { slide as Menu } from 'react-burger-menu'

// Components
import Cart from "../cart/index";
//actions
import { userLogin } from "../../redux/user/actions";
// Styles
import * as Styles from "./styles";

//assets 
import cartSvg from '../../assets/cart.svg'




function Header() {

  const { userIsLogged } = useSelector((rootReducer) => rootReducer.userReducer)
  const { products } = useSelector((rootReducer) => rootReducer.CartReducer)

  const productsCart = useMemo(() =>
    products.reduce((acc, curr) => acc + curr.quantity, 0),
    [products])

  const dispatch = useDispatch()
  // console.log(state)
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const signInLogouOut = () => {
    dispatch(userLogin({ user: "Felipe", email: 'user@rmail', userIsLogged: !userIsLogged }))
  }
  const handleCartClick = () => setCartIsVisible(true);

  return (
    <Styles.Container>
      <Styles.Logo>
        <img src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="Redux Logo" className="themedImage_ToTc themedImage--light_HNdA" />
        <p>Redux</p>
        <span>Shopping</span>
      </Styles.Logo>
      <Styles.LinksContainer>
        <nav>
          <ul>
            <li onClick={signInLogouOut}>{!userIsLogged ? 'Login' : 'Sair'}</li>
            <li>Moda</li>
            <li>Verão</li>
            <li>Contato</li>
          </ul>
        </nav>
        <img onClick={handleCartClick} src={cartSvg} alt="cart" title="carrinho" />
        <span style={{ fontWeight: '600', color: 'black' }} >{productsCart}</span>
      </Styles.LinksContainer>
      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
