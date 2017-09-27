import productsReducer from './productsReducer';
import { actionTypes } from './actions';

const TEST_INITIAL_STATE = {
    products: [
        {
            id: '123123-234-2341-123123-123123',
            name: 'Greek amphora',
            imageUrl: '//c1.staticflickr.com/5/4215/35504896635_ec1a78af43_b.jpg',
            longDesc: '122354w35 sdf sf34r34',
            shortDesc: 'Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut.',
            price: '110K USD',
            inCart: false
        },
        {
            id: '123123-12342-456456-123123-123123',
            name: 'Greek amphora',
            imageUrl: '//c1.staticflickr.com/5/4215/35504896635_ec1a78af43_b.jpg',
            longDesc: '122354w35 sdf sf34r34',
            shortDesc: 'Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut.',
            price: '130K USD',
            inCart: false
        },
        {
            id: '123123-345-2341-3453-123123',
            name: 'Greek amphora',
            imageUrl: '//c1.staticflickr.com/5/4215/35504896635_ec1a78af43_b.jpg',
            longDesc: '122354w35 sdf sf34r34',
            shortDesc: 'Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut.',
            price: '140K USD',
            inCart: false
        },
        {
            id: '123123-2342-2341-45345-123123',
            name: 'Greek amphora',
            imageUrl: '//c1.staticflickr.com/5/4215/35504896635_ec1a78af43_b.jpg',
            longDesc: '122354w35 sdf sf34r34',
            shortDesc: 'Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut.',
            price: '105K USD',
            inCart: false
        },
        {
            id: '123123-12342-234234-123123-234234',
            name: 'Greek amphora',
            imageUrl: '//c1.staticflickr.com/5/4215/35504896635_ec1a78af43_b.jpg',
            longDesc: '122354w35 sdf sf34r34',
            shortDesc: 'Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut.',
            price: '107K USD',
            inCart: false
        },
        {
            id: '546456-22342-2341-54645-23423',
            name: 'Greek amphora',
            imageUrl: '//c1.staticflickr.com/5/4215/35504896635_ec1a78af43_b.jpg',
            longDesc: '122354w35 sdf sf34r34',
            shortDesc: 'Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut.',
            price: '109K USD',
            inCart: false
        }
    ]

}

describe('productsReducer test', () => {
    it('should return proper initial value', () => {
        expect(productsReducer(undefined, {})).toEqual(TEST_INITIAL_STATE)
    })

    it('should add  product', () => {
        const newProducts = TEST_INITIAL_STATE.products.map(item => item.id === '546456-22342-2341-54645-23423' ? { ...item, inCart: true } : item);
        expect(
            productsReducer(TEST_INITIAL_STATE, {
                type: actionTypes.ADD_PRODUCT_TO_CART,
                itemId: '546456-22342-2341-54645-23423'
            })
        )
            .toEqual({
                products: newProducts
            })
    })
    it('should remove product', () => {
        const oldProducts = TEST_INITIAL_STATE.products.map(item => item.id === '546456-22342-2341-54645-23423' ? { ...item, inCart: false } : item);
        expect(
            productsReducer(TEST_INITIAL_STATE, {
                type: actionTypes.REMOVE_PRODUCT_TO_CART,
                itemId: '546456-22342-2341-54645-23423'
            })
        )
            .toEqual({
                products: oldProducts
            })
    })
})

