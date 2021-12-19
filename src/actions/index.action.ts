import { USER } from "./types.action";
import { fakeAuthProvider } from "../auth";

export const setUser = (newUser: string) => (dispatch: any) => {
    dispatch({
        type: USER,
        payload: newUser
    });
}


export const signin = (newUser: string, callback: VoidFunction) => (dispatch: any):any => {
    return fakeAuthProvider.signin(() => {
        dispatch({
            type: USER,
            payload: newUser
        });
        localStorage.setItem('user', newUser);
        callback();
    });
}

export const signout = (callback: VoidFunction) => (dispatch: any):any => {
    return fakeAuthProvider.signout(() => {
        dispatch({
            type: USER,
            payload: ""
        });
        localStorage.removeItem("user");
        callback();
    });
}
