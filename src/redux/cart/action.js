import {CartActionTypes} from './actions-types'

export const addProductCart = (payload) => ({
    type: CartActionTypes.ADD_PRODUCT, 
    payload
 })

 export const addQuantityCart = (payload) => ({
   type: CartActionTypes.DECREASE_PRODUCT,
   payload
 })

 export const removeProductFromCart = (payload) => ({
   type: CartActionTypes.REMOVE_PRODUCT,
   payload
 })