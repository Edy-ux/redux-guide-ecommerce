

export const selectProductsTotalPrice = (rootReducer)  => {
    return rootReducer.CartReducer.products.reduce((acc, curr) => {
        return acc + curr.quantity * curr.price
    }, 0)
}

