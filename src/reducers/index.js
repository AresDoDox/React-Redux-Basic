import ProductReducer from './products-reducer';
import UserReducer from './users-reducer';
import ActiveProductReducer from './active-product-reducer';

import {combineReducers} from 'redux';


const allReducers = combineReducers({
    products: ProductReducer,
    users: UserReducer,
    activeProduct: ActiveProductReducer  
})

export default allReducers;