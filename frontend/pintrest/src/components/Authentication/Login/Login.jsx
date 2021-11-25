import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styles from "../auth.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Authcontext } from "../Authcontext";
export default function Signin() {
    const { setisUserLogedin } = useContext(Authcontext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({});
    const navigate = useNavigate();
    let token = "";
    const submitHandler = (e) => {
        e.preventDefault();
        console.log("trying to login");
        setLoading(true);
        setError({});
        const bodyParameters = {
            username,
            password,
        };
        const host = "http://localhost:8000";
        const path = "/accounts/api/v1";
        const endpoint = "/login";
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
                        type="password"
                        id="password"
                        name="password"
                        placeholder="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />

                    <button type="submit">
                        {loading ? "Logging in.." : "log in"}
                    </button>
                    <p id="register_notice">
                        Dont have an account?<Link to="/signup">Sign Up</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
