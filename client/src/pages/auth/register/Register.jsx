import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import registerBackground from "../../../assets/background/sign-up.svg";
import { useFormik } from "formik";
import { registerSchema } from "../../../helper/validate";
import { registerUser } from "../../../helper/helper";
import { useState } from "react";

export default function Register() {

    const navigate = useNavigate();
    const [emailExist, setEmailExsist] = useState("");

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: registerSchema,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async (values) => {
            let registerPromise = await registerUser(values);
            if (registerPromise === "Please use unique Email") {
                setEmailExsist(registerPromise);
            }

            if (registerPromise === "Register Successfully") {
                navigate("/login");
            }
            console.log(registerPromise);
        },
    });

    return (
        <div className="register">
            <div className="registerContainer">
                <span className="registerTitle">Register</span>
                <form className="registerForm" onSubmit={formik.handleSubmit}>
                    <label>Name</label>
                    <input
                        {...formik.getFieldProps("name")}
                        type="text"
                        placeholder="Enter your name"
                        className={formik.errors.name ? "input-error" : ""}
                    />
                    {formik.errors.name && (
                        <p className="error">{formik.errors.name}</p>
                    )}
                    <label>Email</label>
                    <input
                        {...formik.getFieldProps("email")}
                        type="email"
                        placeholder="Enter your email"
                        className={(formik.errors.email || emailExist) ? "input-error" : ""}
                    />
                    {(formik.errors.email && (
                        <p className="error">{formik.errors.email}</p>
                    )) ||
                        (emailExist && <p className="error">{emailExist}</p>)}

                    <label>Password</label>
                    <input
                        {...formik.getFieldProps("password")}
                        type="password"
                        placeholder="Enter your password"
                        className={formik.errors.password ? "input-error" : ""}
                    />
                    {formik.errors.password && (
                        <p className="error">{formik.errors.password}</p>
                    )}
                    <label>Confirm Password</label>
                    <input
                        {...formik.getFieldProps("confirmPassword")}
                        type="password"
                        placeholder="Enter your password again"
                        className={
                            formik.errors.confirmPassword ? "input-error" : ""
                        }
                    />
                    {formik.errors.confirmPassword && (
                        <p className="error">{formik.errors.confirmPassword}</p>
                    )}
                    <button className="registerButton" type="submit">
                        Register
                    </button>
                </form>
                <Link className="link" to="/login">
                    <button className="registerLoginButton">Login</button>
                </Link>
            </div>
            <img src={registerBackground} alt="Register Background" />
        </div>
    );
}
