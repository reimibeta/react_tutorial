import React, { FC, useState } from "react";
import { AuthContext } from "../utils/AuthContext";
import { fakeAuthProvider } from "../auth";

export function AuthProvider({ children }: { children: React.ReactNode }) {
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
  
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
  }