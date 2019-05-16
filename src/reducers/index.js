import ProductReducer from './products-reducer';
import UserReducer from './users-reducer';

import {combineReducers} from 'redux';

const allReducers = combineReducers({
    products: ProductReducer,
    users: UserReducer 
})

export default allReducers;