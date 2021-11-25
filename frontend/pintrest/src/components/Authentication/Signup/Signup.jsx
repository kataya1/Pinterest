import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styles from "../auth.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Authcontext } from "../Authcontext";

// axios.defaults.baseURL = 'http://localhost:1010/'
// axios.defaults.headers.common = {'Authorization': `bearer ${token}`}
// export default axios;
export default function Signup() {
    const { setisUserLogedin } = useContext(Authcontext);
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
        console.log("trying to signup 🍅");

        setLoading(true);
        setError({});
        const bodyParameters = {
            username,
            email,
            password,
            password_confirm: confirmPassword,
        };
        const host = "http://localhost:8000";
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
            })
            .finally(() => {
                setLoading(false);
            });
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
                        <>
                            <span>{`${key}:  ${error[key]}`}</span>
                            <br />
                        </>
                    ))}
                </div>
                <form onSubmit={(e) => submitHandler(e)}>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="username"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                    />
                    <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    <input
                        type="password"
                        id="confirm_password"
                        name="confirm_password"
                        placeholder="confirm password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                    />
                    <button type="submit">
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
