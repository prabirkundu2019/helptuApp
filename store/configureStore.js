import { createStore, combineReducers, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import serviceReducer from '../src/reducers/serviceReducer';

const rootReducer = combineReducers(
    { 
        service: serviceReducer
    }
);

const middleware = [thunk];

const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(...middleware));
}

export default configureStore;