import { USER } from "../actions/types.action";

const INITIAL_STATE = {
    authenticated: '',
    errorMessage: ''
}

export default function auth(state = INITIAL_STATE, action: any){
    if (action.type === USER){
        return { ...state, authenticated: action.payload };
    }
    return state;
}