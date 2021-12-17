// import React, { Component } from "react";

// class PrivateRoute extends Component {

//     render(){
//         let auth = useAuth();
//         return (
//             <Route
//             {...rest}
//             render={({ location }) =>
//                 auth.user ? (
//                 children
//                 ) : (
//                 <Navigate
//                     to={{
//                     pathname: "/login",
//                     state: { from: location }
//                     }}
//                 />
//                 )
//             }
//             />
//         );
//     }

// }

// export default PrivateRoute;
import React, { useContext, createContext, useState } from "react";
import {
    Route,
    Navigate,
  } from "react-router-dom";

/** For more details on
 * `authContext`, `ProvideAuth`, `useAuth` and `useProvideAuth`
 * refer to: https://usehooks.com/useAuth/
 */
 const authContext = createContext();
 
 function useAuth() {
   return useContext(authContext);
 }
 

export function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Navigate
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}