import "./reset.css";
import resetImage from "../../../assets/background/reset-password.svg";
import { useFormik } from "formik";
import { Toaster, toast } from "react-hot-toast";
import { resetSchema } from "../../../helper/validate";
import { resetPassword } from "../../../helper/helper";
import { useAuthStore } from "../../../store/store";
import { Navigate, useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/fetch-hook";
import PageNotFound from "../../PageNotFound";
// import { useState } from "react";

export default function Reset() {

    const { username } = useAuthStore(state => state.auth);
    const navigate = useNavigate();
    const [{ status, serverError }] = useFetch("createResetSession");

    const formik = useFormik({
        initialValues: {
            password: '',
            confirmPassword: ''
        },
        validationSchema: resetSchema,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async (values) => {
            let resetPromise = resetPassword({ username, password: values.password });

            toast.promise(resetPromise, {
                loading: "Updating...",
                success: <b>Reset Successfully...!</b>,
                error: <b>Could not Reset! Try again..</b>
            });

            resetPromise.then(function () { navigate('/login') });
        },
    });

    if (serverError) return <PageNotFound />
    if(status && status !== 201) return <Navigate to={'/login'} replace={true}></Navigate>

    return (
        <div className="reset">

            <Toaster position="top-center" reverseOrder={false}></Toaster>

            <img src={resetImage} alt="Reset 4to" />
            <div className="resetContainer">
                <span className="resetTitle">Reset Password</span>
                <form className="resetForm" onSubmit={formik.handleSubmit}>
                    <label>New password</label>
                    <input
                        {...formik.getFieldProps("password")}
                        type="password"
                        placeholder="Enter new password"
                        className={formik.errors.password ? "input-error" : ""}
                    />
                    {formik.errors.password && (
                        <p className="error">{formik.errors.password}</p>
                    )}
                    <label>confirm password</label>
                    <input
                        {...formik.getFieldProps("confirmPassword")}
                        type="password"
                        placeholder="Enter passwor again"
                        className={formik.errors.confirmPassword ? "input-error" : ""}
                    />
                    {formik.errors.confirmPassword && (
                        <p className="error">{formik.errors.confirmPassword}</p>
                    )}
                    <button className="resetButton" type="submit">
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    );
}
