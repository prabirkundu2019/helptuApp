import { SERVICES, PROVIDERS } from '../constants';

const initialState = {
    service: [],
    providers: [],
    serviceData: {},
    totalProvider: 0
};

const serviceReducer = (state = initialState, action) => {  
    
    switch(action.type) {                
        case SERVICES: 
            return {
                ...state,
                service: action.payload
            };
        case PROVIDERS: 
            console.log(action.payload);
            return {
                ...state,
                providers: action.payload.providers,
                serviceData: action.payload.service,
                totalProvider: action.payload.total_provider
            };
        default:
            return state;
    }
}

export default serviceReducer;