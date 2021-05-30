import { REGISTER_USER } from '../_actions/types';

export default (state: any = {}, action: any) => {
    switch (action.type) {
        case REGISTER_USER:
            return { ...state, register: action.payload };
        default:
            return state;
    }
}