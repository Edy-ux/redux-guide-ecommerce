import {CartActionTypes} from './actions-types'

export const addProductsCart = (payload) => ({
    type: CartActionTypes.ADD_PRODUCT, 
    payload
 })