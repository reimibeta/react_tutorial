import { USER } from "./types.action";
import { fakeAuthProvider } from "../auth";

export const signin = () => (newUser: string, callback: VoidFunction, dispatch: any) => {
    return fakeAuthProvider.signin(() => {
        dispatch({
            type: USER,
            payload: newUser
        });
        // localStorage.setItem('user', newUser);
        callback();
    });
}

export const signout = () => (callback: VoidFunction, dispatch: any) => {
    return fakeAuthProvider.signout(() => {
        dispatch({
            type: USER,
            payload: ""
        });
        // localStorage.removeItem("user");
        callback();
    });
}
