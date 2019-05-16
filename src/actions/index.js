import {SELECT_PRODUCT} from './actionTypes';

export const selectProduct = (product) => {
    console.log(`You clicked a product with name: ${product.name}`);
    return {
        type: SELECT_PRODUCT,
        payload: product
    }
}