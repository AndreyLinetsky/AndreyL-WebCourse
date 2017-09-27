import { removeProductFromCart, addProductToCart, actionTypes } from './actions';


describe('actions tests', () => {
    it('remove product correct type', () => {
        expect(removeProductFromCart()).toEqual({
            type: actionTypes.REMOVE_PRODUCT_FROM_CART
        })
    })
    it('add product correct type', () => {
        expect(addProductToCart()).toEqual({
            type: actionTypes.ADD_PRODUCT_TO_CART
        })
    })
})