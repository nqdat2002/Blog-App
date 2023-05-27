import React, { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Login = () => {
    const { login } = useContext(AuthContext);
    const [inputs, setInputs] = useState({
        username: "",
        password: "",
    });
    const [err, setError] = useState(null);
    const navigate = useNavigate();
    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        login(inputs);
        navigate("/");
    };
    return (
        <div className="auth">
            <h1>Login</h1>
            <form>
                <input
                    required
                    type="text"
                    placeholder="username"
                    name="username"
                    onChange={handleChange}
                />
                <input
                    required
                    type="password"
                    placeholder="password"
                    name="password"
                    onChange={handleChange}
                />
                <button onSubmit={handleSubmit}> Login</button>
                <span>
                    Don't you have an account? <Link to="/register">Register</Link>
                </span>
            </form>
        </div>
    );
};

export default Login;