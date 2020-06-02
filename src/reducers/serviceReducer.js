import { SERVICES, PROVIDERS, SERVICE, USER } from '../constants';

const initialState = {
    services: [],
    providers: [],
    service: {},
    user: {},
    totalProvider: 0
};

const serviceReducer = (state = initialState, action) => {  
    
    switch(action.type) {                
        case SERVICES: 
            return {
                ...state,
                services: action.payload
            };
        case PROVIDERS: 
            return {
                ...state,
                providers: action.payload.providers,
                serviceData: action.payload.service,
                totalProvider: action.payload.total_provider
            };
        case SERVICE: 
            return {
                ...state,
                service: action.payload
            };
        case USER: 
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
}

export default serviceReducer;