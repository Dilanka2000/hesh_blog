import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import loginBackground from "../../../assets/background/sign-in.svg";
import { useFormik } from "formik";
import { loginSchema } from "../../../helper/validate";
import { login } from "../../../helper/helper";
import { useState } from "react";
import { useAuthStore } from "../../../store/store";

export default function LogIn() {

    const navigate = useNavigate();
    const [invalidEmail, setInvalidEmail] = useState("");
    const [invalidPassword, setInvalidPassword] = useState("");
    const setUsername = useAuthStore(state => state.setUsername);

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: loginSchema,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async (values) => {
            let loginPromise = await login(values);
            if (loginPromise === "Username not Found") {
                setInvalidEmail(loginPromise);
                setInvalidPassword('');
            }
            if (loginPromise === "Password does not match") {
                setInvalidPassword(loginPromise);
                setInvalidEmail('');
                setUsername(values.username);
            }

            if (loginPromise.data.msg === "Login Successfully...!") {
                let { token } = loginPromise.data;
                localStorage.setItem('token', token);
                setUsername(values.username);
                navigate("/home");
            }
            console.log(loginPromise);
        },
    });

    return (
        <div className="login">
            <img src={loginBackground} alt="Login Background" />
            <div className="loginContainer">
                <span className="loginTitle">Login</span>
                <form className="loginForm" onSubmit={formik.handleSubmit}>
                    <label>Email</label>
                    <input
                        {...formik.getFieldProps("username")}
                        type="text"
                        placeholder="Enter your email*"
                        className={formik.errors.username ? "input-error" : ""}
                    />
                    {(formik.errors.username && (
                        <p className="error">{formik.errors.username}</p>
                    )) ||
                        (invalidEmail && (
                            <p className="error">{invalidEmail}</p>
                        ))}

                    <label>Password</label>
                    <input
                        {...formik.getFieldProps("password")}
                        type="password"
                        placeholder="Enter your password*"
                        className={formik.errors.password ? "input-error" : ""}
                    />
                    {(formik.errors.password && (
                        <p className="error">{formik.errors.password}</p>
                    )) ||
                        (invalidPassword && (
                            <p className="error">{invalidPassword}</p>
                        ))}
                    {invalidPassword && (
                        <div>
                            Forgot Password?{" "}
                            <Link className="link" to="/recovery">
                                Reset
                            </Link>
                        </div>
                    )}

                    <button className="loginButton" type="submit">
                        Login
                    </button>
                </form>
                <Link className="link" to="/register">
                    <button className="loginRegisterButton">Register</button>
                </Link>
            </div>
        </div>
    );
}
