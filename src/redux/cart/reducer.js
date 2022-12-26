import { CartActionTypes } from './actions-types'

const initialState = {
  products: [],
  totalProductsPrice: 0,
  totalProductsCart: 0
  //(products) => products.map(product => product).length,
}

const CartReducer = (state = initialState, action) => {

  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT:
      const isAlreadyInCart = state.products.some(product => product.id === action.payload.id)
      if (isAlreadyInCart) {
        return {
          ...state,
          products: state.products.map(product => product.id === action.payload.id ?
            { ...product, quantity: product.quantity + 1, totalPrice: product.quantity >= 1 ? (product.quantity + 1) * product.price : product.price } : product
          )
        }
      }

      return {
        ...state,
        products: [
          ...state.products,
          { ...action.payload, quantity: 1 }
        ],
        totalProductsPrice: state.totalProductsPrice += action.payload.price,
        // totalProductsCart: state.products.length + 1,

      }

    case CartActionTypes.DECREASE_PRODUCT:
      const fnCallback = (product) => product.id === action.payload.id && product.quantity > 1 ?
        { ...product, quantity: product.quantity - 1, totalPrice: product.totalPrice - product.price } : product
      return {
        ...state,
        products: state.products.map(fnCallback)
      }
     
    case CartActionTypes.REMOVE_PRODUCT:
      return {
        ...state, products: state.products.filter(product => product.id !== action.payload.id)
      }

    default:
      return state;
  }

}

export default CartReducer;