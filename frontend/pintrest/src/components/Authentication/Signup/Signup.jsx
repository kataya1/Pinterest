import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styles from "../auth.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Authcontext } from "../Authcontext";


export default function Signup() {
    const { setisUserLogedin, host } = useContext(Authcontext);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    // is this fine, isn't this computable ?
    const [error, setError] = useState({});
    const navigate = useNavigate();
    let token = "";
    const submitHandler = (e) => {
        e.preventDefault();
        console.log("trying to signup");

        setLoading(true);
        setError({});
        const bodyParameters = {
            username,
            email,
            password,
            password_confirm: confirmPassword,
        };

        const path = "/accounts/api/v1";
        const endpoint = "/signup";
        axios({
            method: "POST",
            url: `${host}${path}${endpoint}`,
            headers: {
                "Content-Type": " application/json",
            },
            data: bodyParameters,
        })
            .then((response) => {
                console.log(response);
                token = response.data.token;
                localStorage.setItem("token", token);
                setisUserLogedin(true);
                navigate("/", { replace: true });
                // this is the part where we redirect
            })
            .catch((err) => {
                if (err.response) {
                    console.log(err.response.data);
                    setError(err.response.data);
                } else {
                    console.log(err);
                    setError({ error: err.message });
                }
                setLoading(false);
            })
    };

    const alertStyle =
        error && Object.keys(error).length === 0
            ? { display: "none" }
            : { display: "block" };

    return (
        <div className={styles["auth-body"]}>
            <div className={styles["form-container"]}>
                <div
                    className="alert alert-danger"
                    role="alert"
                    style={alertStyle}
                >
                    {Object.keys(error).map((key, index) => (
                        
                            <span key={`proplem ${key}`}>{`${key}:  ${error[key]}`}</span>
                            
                        )
                        )}
                </div>
                <form onSubmit={(e) => submitHandler(e)}>
                  
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="username"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        autoComplete="off"
                        minLength="4"
                        required
                    />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="email@email.com"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        autoComplete="off"
                        required
                    />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        autoComplete="off"
                        required
                        minLength="8"
                    />
                    <input
                        type="password"
                        id="confirm_password"
                        name="confirm_password"
                        placeholder="confirm password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                        autoComplete="off"
                        required
                    />
                    <button type="submit" >
                        {loading ? "Creating Account.." : "Create Account"}
                    </button>
                    <p id="register_notice">
                        already have an account? <Link to="/login">Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
