import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";

const AuthStatus: FC = () => {

    let auth = useAuth();
        let navigate = useNavigate();
        console.log("Local Auth: ", localStorage.getItem('user'));
        if (!auth.user && localStorage.getItem("user") === null) {
            return <p>You are not logged in.</p>;
        }
    
    return (
        <p>
            Welcome { localStorage.getItem('user')}!{" "}
            <button
            onClick={() => {
                auth.signout(() => navigate("/"));
            }}
            >
            Sign out
            </button>
        </p>
    );
}

export default AuthStatus;