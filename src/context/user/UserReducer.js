import { FETCH_MINICART, FETCH_WISHLIST } from '../../types';

export default(state, action) => {
    switch(action.type){
        case FETCH_MINICART:
            return action.payload;
        case FETCH_WISHLIST:
            return action.payload;      
        default:
            return state;
    }
}