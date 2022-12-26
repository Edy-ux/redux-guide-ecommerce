

const initialState = {
  products: [{}],
  totalProductsPrice: 0,
  totalProductsCart: 0
  //(products) => products.map(product => product).length,
}

const CartReducer = (state = initialState, action) => {

  switch (action.type) {

    case 'cart/addProduct':
      return {
        ...state,
        products: [...state.products, action.payload],
        totalProductsPrice: state.products.reduce((acc, product) => acc += action.payload.price, 0),
        totalProductsCart: state.products.map(product => product).length
      }
    default:
      return state;
  }

}

export default CartReducer;