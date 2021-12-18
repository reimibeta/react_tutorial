import { USER } from "../actions/types.action";

const INITIAL_STATE = {
    authenticated: '',
    errorMessage: ''
}

export default function(state = INITIAL_STATE, action: any){
    if (action.type === USER){
        return { ...state, authenticated: action.payload };
    }
}