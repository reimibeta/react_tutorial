import React, { FC, useState } from "react";
import { AuthContext } from "../utils/AuthContext";
import { fakeAuthProvider } from "../auth";

const AuthProvider: FC = (children: React.ReactNode) => {
    let [user, setUser] = React.useState<any>(null);
    let signin = (newUser: string, callback: VoidFunction) => {
        return fakeAuthProvider.signin(() => {
            setUser(newUser);
            localStorage.setItem('user', newUser);
            callback();
        });
    };

    let signout = (callback: VoidFunction) => {
        return fakeAuthProvider.signout(() => {
            setUser(null);
            localStorage.removeItem("user");
            callback();
        });
    };
    
    let value = { user, signin, signout };

    return <AuthContext.Provider value={value}>{
       children
    }</AuthContext.Provider>;
}

// class AuthProvider extends Component {

//     componentDidMount() {
        
//     }
  
//     // Our component just got updated
//     componentDidUpdate() {
          
//     }

//     check(){
//         let [user, setUser] = React.useState<any>(null);
//         let signin = (newUser: string, callback: VoidFunction) => {
//             return fakeAuthProvider.signin(() => {
//                 setUser(newUser);
//                 localStorage.setItem('user', newUser);
//                 callback();
//             });
//         };
    
//         let signout = (callback: VoidFunction) => {
//             return fakeAuthProvider.signout(() => {
//                 setUser(null);
//                 localStorage.removeItem("user");
//                 callback();
//             });
//         };
        
//         let value = { user, signin, signout };
//     }

//     render(): React.ReactNode {
//         // let value = { user, signin, signout };
//         // let { value } = this.state;
//         return <AuthContext.Provider value={value}>{
//             this.props.children
//         }</AuthContext.Provider>;
//     }
// }

export default AuthProvider;