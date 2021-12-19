import React, { FC, useState } from "react";
import { AuthContext } from "../utils/AuthContext";
import { fakeAuthProvider } from "../auth";
import { connect } from "react-redux";
import * as actions from '../actions/index.action';

// function AuthProvider({ children }: { children: React.ReactNode }) {
//     let [user, setUser] = React.useState<any>(null);
  
//     let signin = (newUser: string, callback: VoidFunction) => {
//       return fakeAuthProvider.signin(() => {
//         setUser(newUser);
//         localStorage.setItem('user', newUser);
//         callback();
//       });
//     };
  
//     let signout = (callback: VoidFunction) => {
//       return fakeAuthProvider.signout(() => {
//         setUser(null);
//         localStorage.removeItem("user");
//         callback();
//       });
//     };
  
//     let value = { user, signin, signout };
  
//     return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
//   }
interface MyProps {
  user: string,
  signin: VoidFunction,
  signout: VoidFunction,
  children?: React.ReactNode
}

const AuthProvider = (props: MyProps) => {
  const user = props.user;
  const signin = props.signin;
  const signout = props.signout;
  let value = { user, signin, signout };
  return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>;
}

const mapStateToProps = (state: any) => {
  console.log("AuthProvier: ", state);
  return {
    signin: state.auth.signin,
    signout: state.auth.signout,
    user: state.auth.authenticated,
    errorMessage: state.auth.errorMessage,
  };
}

export default connect(mapStateToProps, actions)(AuthProvider);

// function mapStateToProps(state: any){
//   console.log("STATE", state);
//   return { 
//       errorMessage: state.auth.errorMessage,
//       user: state.auth.authenticated
//   };
// }
//   interface MyProps {
//     readonly id: number,
//     name: string,
//     password?: string,
//     object?: { a: string, b: string },
//     // test: Test
// }

// // const user: UserInterface = {
// //     id: 1,
// //     name: 'reimi'
// // }
// // const PublicPage: React.FC<MyProps> = ({name}: MyProps) => {
// // const PublicPage = (props: { who: string }) => {
// const PublicPage = (props: MyProps) => {
//     return <p>Hello, { props.name } from Public Page.</p>; 
// }