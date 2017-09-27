import { createStore } from 'redux';
import productsReducer from './productsReducer';

export default createStore(productsReducer);