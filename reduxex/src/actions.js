export const actionTypes = {
    ADD_PRODUCT_TO_CART: 'ADD_PRODUCT_TO_CART',
    REMOVE_PRODUCT_FROM_CART: 'REMOVE_PRODUCT_FROM_CART'
}

export const addProductToCart = (itemId) => ({
    type: actionTypes.ADD_PRODUCT_TO_CART,
    itemId
})

export const removeProductFromCart = (itemId) => ({
    type: actionTypes.REMOVE_PRODUCT_FROM_CART,
    itemId
})

