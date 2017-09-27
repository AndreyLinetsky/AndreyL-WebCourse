import { actionTypes } from './actions';

const INITIAL_STATE = {
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

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_PRODUCT_TO_CART:
            return {
                ...state,
                products: state.products.map(item => item.id === action.itemId ?
                    { ...item, inCart: true } : item)
            }
        case actionTypes.REMOVE_PRODUCT_FROM_CART:
            return {
                ...state,
                products: state.products.map(item => item.id === action.itemId ?
                    { ...item, inCart: false } : item)
            }
        default:
            return state;
    }
};


export const getProductsSelector = state => state.products;

export const getCartProductsSelector = (state) => {
    return state.products.filter(item => item.inCart)
}