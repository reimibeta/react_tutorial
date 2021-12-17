// import React, {useEffect, useState} from 'react';
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Nav } from 'react-bootstrap';
// import './App.css';
// import Home from './pages/Home';
// // import Login from './pages/Login';

// function App() {
//   const [name, setName] = useState('');

//     useEffect(() => {
//         (
//             async () => {
//                 // const response = await fetch('http://localhost:8000/api/user', {
//                 //     headers: {'Content-Type': 'application/json'},
//                 //     credentials: 'include',
//                 // });

//                 // const content = await response.json();

//                 // setName(content.name);
//             }
//         )();
//     });


//     return (
//         <div className="App">
//             <BrowserRouter>
//                 <Nav name={name} setName={setName}/>

//                 <main className="form-signin">
//                     <Routes>
//                       <Route path="/" element={<Home />} />
//                       {/* <Route path="/login" element={<Login />} /> */}
//                       {/* <Route path="/login" component={() => <Login setName={setName}/>}/>
//                       <Route path="/register" component={Register}/> */}
//                     </Routes>
//                 </main>
//             </BrowserRouter>
//         </div>
//     );
// }

// export default App;


import React, { useContext, createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate,
  useLocation
} from "react-router-dom";

// This example has 3 pages: a public page, a protected
// page, and a login screen. In order to see the protected
// page, you must first login. Pretty standard stuff.
//
// First, visit the public page. Then, visit the protected
// page. You're not yet logged in, so you are redirected
// to the login page. After you login, you are redirected
// back to the protected page.
//
// Notice the URL change each time. If you click the back
// button at this point, would you expect to go back to the
// login page? No! You're already logged in. Try it out,
// and you'll see you go back to the page you visited
// just *before* logging in, the public page.
import PublicPage from "./Temp/PublicPage";
import ProtectedPage from "./Temp/ProtectedPage";
import { PrivateRoute } from "./Temp/PrivateRoute";

export default function AuthExample() {
  return (
    <ProvideAuth>
      <Router>
        <div>
          <AuthButton />

          <ul>
            <li>
              <Link to="/public">Public Page</Link>
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
          </ul>

          <Routes>
            <Route path="/public" element={<PublicPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/protected" element={
              <PrivateRoute>
                <ProtectedPage />
              </PrivateRoute>
            } />
          </Routes>
        </div>
      </Router>
    </ProvideAuth>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  signin(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

/** For more details on
 * `authContext`, `ProvideAuth`, `useAuth` and `useProvideAuth`
 * refer to: https://usehooks.com/useAuth/
 */
const authContext = createContext();

function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

function useAuth() {
  return useContext(authContext);
}

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signin = cb => {
    return fakeAuth.signin(() => {
      setUser("user");
      cb();
    });
  };

  const signout = cb => {
    return fakeAuth.signout(() => {
      setUser(null);
      cb();
    });
  };

  return {
    user,
    signin,
    signout
  };
}

function AuthButton() {
  let history = useNavigate();
  let auth = useAuth();

  return auth.user ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          auth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
// function PrivateRoute({ children, ...rest }) {
//   let auth = useAuth();
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         auth.user ? (
//           children
//         ) : (
//           <Navigate
//             to={{
//               pathname: "/login",
//               state: { from: location }
//             }}
//           />
//         )
//       }
//     />
//   );
// }

// function PublicPage() {
//   return <h3>Public</h3>;
// }

// function ProtectedPage() {
//   return <h3>Protected</h3>;
// }

function LoginPage() {
  let history = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    auth.signin(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}
